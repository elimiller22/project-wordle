import React from 'react';
import { GAME_STATUS } from '../../constants';

function Banner({ status, numGuesses, answer }) {
  if (status === GAME_STATUS.WON) {
    return (
      <div className='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numGuesses} guesses</strong>
        </p>
      </div>
    )
  }
  if (status === GAME_STATUS.LOSE) {
    return (
      <div className='sad banner'>
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    )
  }
  return null;
}

export default Banner;
