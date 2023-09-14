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
import Assemble from "../components/Assemble";


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


  const handleWordSelect = (word, syllables) => {
    console.log(`Selected word: ${word}`);
    console.log(`Selected syllables: ${syllables}`);

    if (lines.line1.reduce((totalSyllables, w) => totalSyllables + w.syllables, 0) < 5) {
      if (
        lines.line1.length < 5 &&
        (lines.line1.length < 4 || lines.line1.reduce((totalSyllables, w) => totalSyllables + w.syllables, 0) + syllables <= 5)
      ) {
        setLines((prevLines) => ({
          ...prevLines,
          line1: [...prevLines.line1, { word, syllables }],
        }));
        setSyllableContainerWords((prevSyllableContainerWords) => ({
          ...prevSyllableContainerWords,
          line1: [...prevSyllableContainerWords.line1, word],
        }));
      } else {
        alert('Line 1 is full or exceeds the syllable limit');
      }
    } else if (lines.line2.reduce((totalSyllables, w) => totalSyllables + w.syllables, 0) < 7) {
      if (
        lines.line2.length < 7 &&
        (lines.line2.length < 6 || lines.line2.reduce((totalSyllables, w) => totalSyllables + w.syllables, 0) + syllables <= 7)
      ) {
        setLines((prevLines) => ({
          ...prevLines,
          line2: [...prevLines.line2, { word, syllables }],
        }));
        setSyllableContainerWords((prevSyllableContainerWords) => ({
          ...prevSyllableContainerWords,
          line2: [...prevSyllableContainerWords.line2, word],
        }));
      } else {
        alert('Line 2 is full or exceeds the syllable limit');
      }
    } else if (lines.line3.reduce((totalSyllables, w) => totalSyllables + w.syllables, 0) < 5) {
      if (
        lines.line3.length < 5 &&
        (lines.line3.length < 4 || lines.line3.reduce((totalSyllables, w) => totalSyllables + w.syllables, 0) + syllables <= 5)
      ) {
        setLines((prevLines) => ({
          ...prevLines,
          line3: [...prevLines.line3, { word, syllables }],
        }));
        setSyllableContainerWords((prevSyllableContainerWords) => ({
          ...prevSyllableContainerWords,
          line3: [...prevSyllableContainerWords.line3, word],
        }));
      } else {
        alert('Line 3 is full or exceeds the syllable limit');
      }
    } else {
      alert('All lines are full');
    }

    console.log('Syllable Container Words:', syllableContainerWords);
  };

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
          <DropContainer onDrop={(item) => handleWordSelect(item.word, item.syllables)}>
            <SyllableContainer title="Line 1 (5 syllables)" words={syllableContainerWords.line1} />
          </DropContainer>
          <DropContainer onDrop={(item) => handleWordSelect(item.word, item.syllables)}>
            <SyllableContainer title="Line 2 (7 syllables)" words={syllableContainerWords.line2} />
          </DropContainer>
          <DropContainer onDrop={(item) => handleWordSelect(item.word, item.syllables)}>
            <SyllableContainer title="Line 3 (5 syllables)" words={syllableContainerWords.line3} />
          </DropContainer>
          <br />
          <a href="#"><span className="creator">SAVE HAIKU</span></a>

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
