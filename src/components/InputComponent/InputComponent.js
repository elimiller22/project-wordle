import React from 'react';

function InputComponent() {
  const [guess, setGuess] = React.useState('');
  function handleSubmit(e) {
    e.preventDefault();
    console.info({ guess });
    setGuess('');
  }
  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess (5 characters):</label>
      <input
        id="guess-input"
        value={guess}
        pattern="\w{5,5}"
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default InputComponent;
