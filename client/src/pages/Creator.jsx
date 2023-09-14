import { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SyllableContainer from '../components/HaikuMods/SyllableContainer';
import DropContainer from '../components/HaikuMods/DropContainer';
import unsplash from '../utils/unsplash';
import Auth from "../utils/auth";
import Nav from '../components/Nav';
import { Link } from "react-router-dom";
import Words from '../components/Words';

import { calculateSyllables } from '../components/HaikuMods/SyllableContainer';


const initialWords = [
  {
    category: '1 syllable',
    words: ['Leaves', 'Stream', 'Song', 'Wind', 'Light'],
  },
  {
    category: '2 syllables',
    words: ['Meadow', 'Whispers', 'Pebble', 'Begins', 'Gentle'],
  },
  {
    category: '3 syllables',
    words: ['Butterfly', 'Waterfall', 'Firefly', 'Horizon', 'Tranquil'],
  },
  {
    category: 'Verbs',
    words: ['Whispers', 'Dancing', 'Begins', 'Sway', 'Blooms'],
  },
  {
    category: 'Adjectives',
    words: ['Golden', 'Tranquil', 'Radiant', 'Fragrant', 'Serene'],
  },
  {
    category: 'Prepositions',
    words: ['of', 'in', 'for', 'the', 'on'],
  },
];

const Creator = () => {
  const [selectedWords, setSelectedWords] = useState([]);
  const [lines, setLines] = useState({
    line1: [],
    line2: [],
    line3: [],
  });


  // Add state variables for each syllable container
  const [syllableContainerWords, setSyllableContainerWords] = useState({
    line1: [],
    line2: [],
    line3: [],
  })

  const [unsplashDataLoaded] = useState(false);
  useEffect(() => {
    unsplash()
      .then(() => {
        // Handle the successful loading of the image if needed
      })
      .catch((error) => {
        console.error('Error loading unsplash data:', error);
      });
  }, []);

  const handleWordSelect = (word, syllables, targetLine) => {
    console.log(`Selected word: ${word}`);
    console.log(`Selected syllables: ${syllables}`);
  
    const maxLineSyllables = {
      line1: 5,
      line2: 7,
      line3: 5,
    };
  
    const lineSyllables = calculateSyllableCountForLine(syllableContainerWords[targetLine]);
  
    if (lineSyllables + syllables <= maxLineSyllables[targetLine]) {
      if (lines[targetLine].length < 5) {
        // Add the word to the target line
        setLines((prevLines) => ({
          ...prevLines,
          [targetLine]: [...prevLines[targetLine], { word, syllables }],
        }));
        setSyllableContainerWords((prevSyllableContainerWords) => ({
          ...prevSyllableContainerWords,
          [targetLine]: [...prevSyllableContainerWords[targetLine], word],
        }));
      } else {
        alert(`Line ${targetLine} is full`);
      }
    } else {
      alert(`Adding '${word}' exceeds the syllable limit for Line ${targetLine}`);
    }
    saveHaiku();
  };
  

const calculateSyllableCountForLine = (lineWords) => {
  return lineWords.reduce(
    (totalSyllables, word) => totalSyllables + calculateSyllables(word),
    0
  );
};

const updateSyllables = () => {
  const newSyllableCount = lines.line1.reduce((totalSyllables, word) => totalSyllables + word.syllables, 0) +
    lines.line2.reduce((totalSyllables, word) => totalSyllables + word.syllables, 0) +
    lines.line3.reduce((totalSyllables, word) => totalSyllables + word.syllables, 0);
};


const updateWordsInSyllableContainer = (containerName, updatedWords) => {
  // Define a function to update words in the specified syllable container
  setSyllableContainerWords((prevSyllableContainerWords) => ({
    ...prevSyllableContainerWords,
    [containerName]: updatedWords,
  }));
};
const updateSyllableCountForLine = (lineName, syllableCount) => {
  setLines((prevLines) => ({
    ...prevLines,
    [lineName]: syllableCount,
  }));
};

const removeWordFromLine = (lineName, index) => {
  // Ensure that the lineName is valid
  if (lines.hasOwnProperty(lineName)) {
    const updatedLine = [...lines[lineName]];
    if (updatedLine.length > index) {
      const removedWord = updatedLine.splice(index, 1)[0];
      setLines({ ...lines, [lineName]: updatedLine });

      const newSyllableCount = updatedLine.reduce(
        (totalSyllables, w) => totalSyllables + w.syllables,
        0
      );

      updateSyllableCountForLine(lineName, newSyllableCount);

      updateWordsInSyllableContainer(lineName, updatedLine);

      console.log(`Removed word: ${removedWord.word}`);
      
      // Call updateSyllables here with the newSyllableCount
      updateSyllables(newSyllableCount);
    }
  }
};

const saveHaiku = () => {
  const haikuToSave = {
    line1: lines.line1.map((wordObj) => wordObj.word),
    line2: lines.line2.map((wordObj) => wordObj.word),
    line3: lines.line3.map((wordObj) => wordObj.word),
  };
  const existingSavedHaikus = JSON.parse(localStorage.getItem('savedHaikus')) || [];

  const updatedSavedHaikus = [...existingSavedHaikus, haikuToSave];

  localStorage.setItem('savedHaikus', JSON.stringify(updatedSavedHaikus));
}


  return (
    <>
    {
      Auth.loggedIn() ? (
        <>
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <Nav />
        <main className="pure-g">
          <div className="pure-u-1-3">
            <DropContainer onDrop={(item) => handleWordSelect(item.word, item.syllables, "line1")}>
              <SyllableContainer
              title="Line 1 (5 syllables)"
              words={syllableContainerWords.line1}
              updateWords={(updatedWords) =>
                updateWordsInSyllableContainer("line1", updatedWords)
              }
              updateSyllables={updateSyllables}
            />
            <div>
              Syllable Count: {calculateSyllableCountForLine(syllableContainerWords.line1)}
            </div>
            </DropContainer>
            <DropContainer onDrop={(item) => handleWordSelect(item.word, item.syllables, "line2")}>
              <SyllableContainer
              title="Line 2 (7 syllables)"
              words={syllableContainerWords.line2}
              updateWords={(updatedWords) =>
                updateWordsInSyllableContainer("line2", updatedWords)
              }
              updateSyllables={updateSyllables}
            />
            <div>
              Syllable Count: {calculateSyllableCountForLine(syllableContainerWords.line2, )}
            </div>
            </DropContainer>
            <DropContainer onDrop={(item) => handleWordSelect(item.word, item.syllables, "line3")}>
              <SyllableContainer
              title="Line 3 (5 syllables)"
              words={syllableContainerWords.line3}
              updateWords={(updatedWords) =>
                updateWordsInSyllableContainer("line3", updatedWords)
              }
              updateSyllables={updateSyllables}
            />
            <div>
              Syllable Count: {calculateSyllableCountForLine(syllableContainerWords.line3)}
            </div>
            </DropContainer>
            <br />
            <a href="#">
            <button className="creator" onClick={saveHaiku}>SAVE HAIKU</button>
          </a>
          </div>
          <div className="pure-u-1-3">
            <Words words={initialWords} onWordSelect={handleWordSelect} />
          </div>
          <aside className="pure-u-1-3 unsplash" id="haikuPicture"></aside>
        </main>
      </div>
    </DndProvider>
        </>
      ) : (
        <><header className="pure-g">
        <div className="pure-u-1">
          <h2>
          <Link className="notLoggedIn" to="/login">Please Login or Sign-Up</Link>
          </h2>
        </div>
      </header>
        </>
      )
    }
    </>
  );
};

export default Creator;