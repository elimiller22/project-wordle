import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputComponent from '../InputComponent'
import GuessResults from '../GuessResults'
import Banner from '../Banner'
import { GAME_STATUS, NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState(GAME_STATUS.IN_PROGRESS)
  function createNewGuess(value) {
    const newGuesses = [...guesses];
    const checkedWord = checkGuess(value, answer);
    newGuesses.push({
      id: crypto.randomUUID(),
      value: value,
      checkedWord,
    })
    if (checkedWord.every(item => item.status === 'correct')) {
      setStatus(GAME_STATUS.WON);
    } else if (newGuesses.length > NUM_OF_GUESSES_ALLOWED) {
      setStatus(GAME_STATUS.LOSE)
    }
    setGuesses(newGuesses);
  }
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} setStatus={setStatus} />
      <Banner status={status} numGuesses={guesses.length} answer={answer} />
      <InputComponent submitGuess={createNewGuess} disabled={status !== GAME_STATUS.IN_PROGRESS} />
    </>
  );
}

export default Game;
