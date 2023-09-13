import { useDrag } from 'react-dnd';
import { calculateSyllables } from '../HaikuMods/SyllableContainer'

const Word = ({ word, onWordSelect }) => {
  const [, ref] = useDrag({
    type: 'WORD',
    item: { word, syllables: calculateSyllables(word) }
  });

  return (
    <div
      ref={ref}
      className="pure-u-1-5 words"
      onClick={() => onWordSelect(word, word.length)} 
    >
      {word}
    </div>
  );
};

const WordDeck = ({ words, onWordSelect }) => {
  return (
    <aside>
      <div className="wordDeck">
        <div>
          {words.map((categoryObj, index) => (
            <div key={index}> {/* Each category in its own column */}
              <h3>{categoryObj.category}</h3>
              <div>
                {categoryObj.words.map((word, wordIndex) => (
                  <Word key={wordIndex} word={word} onWordSelect={onWordSelect} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default WordDeck;



