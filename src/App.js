/** @format */

//Import React to create components
import React, { useState } from 'react';

//Import the HangmanDrawing component
import HangmanDrawing from './components/HangmanDrawing';
import WordDisplay from './components/WordDisplay';

//Import words list
import words from './data/words';

//Import keyboard components
import Keyboard from './components/Keyboard';

//Import HELP component
import Help from './components/Help';

//Maximum incorrect guesses allowed
const MAX_WRONG = 10;

//Main App component
function App() {
  //Store the chosen word in state
  const [word, setWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  //Store the number of incorrect guesses
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);

  //Store guessed letters
  const [guessedLetters, setGuessedLetters] = useState([]);

  //Determine if player has won
  const isWinner = word
    .split('')
    .every((letter) => guessedLetters.includes(letter));

  //Determine if the player has lost
  const isLoser = incorrectGuesses >= MAX_WRONG;

  //Restart the game
  function restartGame() {
    setIncorrectGuesses(0);
    setGuessedLetters([]);
    setWord(words[Math.floor(Math.random() * words.length)]);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>React Hang Man</h1>

      {/* Display the Hangman drawing */}
      <HangmanDrawing incorrectGuesses={incorrectGuesses} />

      {/* Word display */}
      <WordDisplay word={word} guessedLetters={guessedLetters} />

      <p>Incorrect guesses {incorrectGuesses}</p>

      {isWinner && <h2 style={{ color: 'green' }}>You Win!</h2>}
      {isLoser && <h2 style={{ color: 'red' }}>Game Over!</h2>}

      {/* button to simulate keyboard */}
      {!isWinner && !isLoser && (
        <Keyboard
          word={word}
          guessedLetters={guessedLetters}
          setGuessedLetters={setGuessedLetters}
          incorrectGuesses={incorrectGuesses}
          setIncorrectGuesses={setIncorrectGuesses}
        />
      )}

      <button
        onClick={restartGame}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
        }}
      >
        Restart Game
      </button>

      <Help />
    </div>
  );
}

//Export the App component so it can be used by index.js
export default App;
