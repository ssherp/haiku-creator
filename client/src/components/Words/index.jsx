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
    <aside className="pure-g">
      <div className="pure-u-2-3 wordDeck">
        <div className="pure-g">
          {words.map((categoryObj, index) => (
            <div key={index} className="pure-u-1-3"> {/* Each category in its own column */}
              <h3>{categoryObj.category}</h3>
              <div className="pure-g">
                {categoryObj.words.map((word, wordIndex) => (
                  <Word key={wordIndex} word={word} onWordSelect={onWordSelect} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pure-u-1-3 inspire"></div>
    </aside>
  );
};

export default WordDeck;



