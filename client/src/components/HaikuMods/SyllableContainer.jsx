import { useDrop } from 'react-dnd';
import DropContainer from './DropContainer';

const SyllableContainer = ({ title, words, onDrop, updateWords, updateSyllables }) => {
  const [, drop] = useDrop({
    accept: 'WORD',
    drop: (item) => {
      onDrop(item);
      updateWords(item.word);
      console.log(`Word dropped: ${item.word}`);
    },
  });

  const removeWord = (index) => {
    if (words && words.length > index) {
      const removedWord = words[index];
      const updatedWords = [...words];
      updatedWords.splice(index, 1);

      // Update the words state with the updatedWords as an array
      updateWords(updatedWords);

      // Call the updateSyllables function here
      const newSyllableCount = updatedWords.reduce(
        (totalSyllables, word) => totalSyllables + calculateSyllables(word),
        0
      );
      updateSyllables(newSyllableCount); // Call the updateSyllables function
    }
  };

  return (
    <div className="syllable-container">
      <p>{title}</p>
      <DropContainer onDrop={(item) => onDrop(item)}>
        <div className="syllable-words" style={{ whiteSpace: 'nowrap' }}>
          {words &&
            words.map((word, index) => (
              <span
                key={index}
                onClick={() => removeWord(index)} 
                style={{ cursor: 'pointer', marginRight: '5px' }} 
              >
                {word}
              </span>
            ))}
        </div>
      </DropContainer>
    </div>
  );
};

export function calculateSyllables(word) {
  if (typeof word !== 'string') {
    // Handle the case where 'word' is not a string (e.g., return 0 or throw an error)
    return 0; // Replace with your desired behavior
  }
  word = word.toLowerCase();
  if (word.length <= 3) return 1; // Very basic syllable count rule.

  // Count vowels in the word.
  const vowels = 'aeiouy';
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
