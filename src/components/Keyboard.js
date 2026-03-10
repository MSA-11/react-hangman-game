/** @format */

//Import React to create components
import React from 'react';

//Keyboard component
//Displays buttons for letters A-Z
function keyboard({
  word,
  guessedLetters,
  setGuessedLetters,
  incorrectGuesses,
  setIncorrectGuesses,
}) {
  //Alphabet letters
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  //Function when a letter is clicked
  const handleGuess = (letter) => {
    //if the letter was already guessed do nothing
    if (guessedLetters.includes(letter)) return;

    //Add the guessed letter
    setGuessedLetters([...guessedLetters, letter]);

    //If the letter is NOT in the word, increase the incorrect guesses
    if (!word.includes(letter)) {
      setIncorrectGuesses(incorrectGuesses + 1);
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => handleGuess(letter)}
          disabled={guessedLetters.includes(letter)}
          style={{
            margin: '5px',
            padding: '10px',
            fontSize: '16px',
          }}
        >
          {letter.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

//Export component
export default keyboard;
