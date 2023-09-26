import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputComponent from '../InputComponent'
import GuessResults from '../GuessResults'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function createNewGuess(value) {
    const newGuesses = [...guesses];
    newGuesses.push({
      id: crypto.randomUUID(),
      value: value,
    })
    setGuesses(newGuesses);
  }
  return (
    <>
      <GuessResults guesses={guesses} />
      <InputComponent submitGuess={createNewGuess} />
    </>
  );
}

export default Game;
