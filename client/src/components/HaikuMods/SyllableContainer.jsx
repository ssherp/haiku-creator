// SyllableContainer.jsx
import { useDrop } from 'react-dnd';
import DropContainer from './DropContainer';


const SyllableContainer = ({ title, words, onDrop, updateWords }) => {
  const [, drop] = useDrop({
    accept: 'WORD',
    drop: (item) => {
      onDrop(item);
      updateWords(item.word);
      console.log(`Word dropped: ${item.word}`);
    },
  });

  const joinedWords = words.join(' ');

  return (
    <div className="syllable-container">
      <p>{title}</p>
      <DropContainer onDrop={(item) => onDrop(item)}>
        <div className="syllable-words">{joinedWords}</div>
      </DropContainer>
    </div>
  );
};

export function calculateSyllables(word) {
  word = word.toLowerCase();
  if (word.length <= 3) return 1; // Very basic syllable count rule.
  
  // Count vowels in the word.
  const vowels = "aeiouy";
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      if (i === 0 || !vowels.includes(word[i - 1])) {
        count++;
      }
    }
  }
  
  return count;
}

export default SyllableContainer;
