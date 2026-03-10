/** @format */

//Import React to create components
import React from 'react';

//Import the hangman images from the assets folder
import hangman0 from '../assets/hangman0.png';
import hangman1 from '../assets/hangman1.png';
import hangman2 from '../assets/hangman2.png';
import hangman3 from '../assets/hangman3.png';
import hangman4 from '../assets/hangman4.png';
import hangman5 from '../assets/hangman5.png';
import hangman6 from '../assets/hangman6.png';
import hangman7 from '../assets/hangman7.png';
import hangman8 from '../assets/hangman8.png';
import hangman9 from '../assets/hangman9.png';
import hangman10 from '../assets/hangman10.png';

//Store all hangman images in an array
const images = [
  hangman0,
  hangman1,
  hangman2,
  hangman3,
  hangman4,
  hangman5,
  hangman6,
  hangman7,
  hangman8,
  hangman9,
  hangman10,
];

//HangmanDrawing component
//incorrectGuesses determines which image to display
function HangmanDrawing({ incorrectGuesses }) {
  return (
    <div>
      {/* Display the correct hangman image based on the incorrect guesses */}
      <img
        src={images[incorrectGuesses]}
        alt="Hangman drawing"
        style={{ width: '200px' }}
      />
    </div>
  );
}

//Export the component so other files can use it
export default HangmanDrawing;
