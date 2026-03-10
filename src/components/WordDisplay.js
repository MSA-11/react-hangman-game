/** @format */

//Import React to create components
import React from 'react';

//WordDisplay component
//Displays the hidden words with underscores
function WordDisplay({ word, guessedLetters }) {
  return (
    <div style={{ fontSize: '30px', letterSpacing: '10px', margin: '20px' }}>
      {/* Split the word into letters and display them */}
      {word.split('').map((letter, index) => (
        <span key={index}>
          {/* Show letter if guessed, otherwise show underscore */}
          {guessedLetters.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
}

//Export component
export default WordDisplay;
