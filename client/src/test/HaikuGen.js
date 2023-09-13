import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import HaikuGen from './HaikuGen';

test('handleWordSelect correctly updates selected words and syllable count', () => {
  const { getByText } = render(<HaikuGen />);
  const wordCard = getByText('ocean'); // Assuming 'ocean' is in the word list

  fireEvent.dragStart(wordCard);
  fireEvent.drop(wordCard);

  // Assert that the selected word is displayed in the 'Selected Words' section
  expect(getByText('ocean')).toBeInTheDocument();

  // Assert that the syllable count is updated
  expect(getByText('2 syllables')).toBeInTheDocument();
});