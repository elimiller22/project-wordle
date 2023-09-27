import React from 'react';

function InputComponent({ submitGuess, disabled }) {
  const [guess, setGuess] = React.useState('');
  function handleSubmit(e) {
    e.preventDefault();
    submitGuess(guess);
    setGuess('');
  }
  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess (5 characters):</label>
      <input
        id="guess-input"
        required
        value={guess}
        pattern="\w{5,5}"
        disabled={disabled}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default InputComponent;
