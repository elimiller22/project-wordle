import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses }) {
  const totalGuesses = guesses.length;
  if (totalGuesses > NUM_OF_GUESSES_ALLOWED) {
    console.log('You lose');
  }
  const start = totalGuesses > 6 ? totalGuesses - 6 : 0;
  const end = totalGuesses > 6 ? totalGuesses : 6;
  return (
    <div className='guess-results'>
      {range(start, end).map(wordIdx => {
        const word = guesses[wordIdx];
        const wordKey = word ? word.id : wordIdx;
        return (
          <p className='guess' key={wordKey}>
            {range(5).map(letterIdx => {
              const letter = word ? word.value[letterIdx] : '';
              return <span key={letterIdx} className='cell'>{letter}</span>
            })}
          </p>
        )
      })}
    </div>
  );
}

export default GuessResults;
