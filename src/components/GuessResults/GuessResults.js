import React from 'react';
import { range } from '../../utils';

function GuessResults({ guesses }) {
  const totalGuesses = guesses.length;
  const start = totalGuesses > 6 ? totalGuesses - 6 : 0;
  const end = totalGuesses > 6 ? totalGuesses : 6;
  return (
    <div className='guess-results'>
      {range(start, end).map(wordIdx => {
        const word = guesses[wordIdx] || {};
        const wordKey = word.id ? word.id : wordIdx;
        const checkedWord = word.checkedWord;
        const valid = Array.isArray(checkedWord) && checkedWord.length === 5;
        return (
          <p className='guess' key={wordKey}>
            {range(5).map(letterIdx => {
              let cellClass = 'cell';
              let letter = '';
              if (valid) {
                const char = checkedWord[letterIdx];
                letter = char.letter;
                cellClass = `${cellClass} ${char.status}`;
              }
              return <span key={letterIdx} className={cellClass}>{letter}</span>
            })}
          </p>
        )
      })}
    </div>
  );
}

export default GuessResults;
