/** @format */

//Import React to create components
import React, { useState } from 'react';

//Help component that shows the rules of the game
function Help() {
  //State to toggle help visibility
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div style={{ marginTop: '20px' }}>
      {/* Button to show or hide help */}
      <button
        onClick={() => setShowHelp(!showHelp)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
        }}
      >
        {showHelp ? 'Hide Rules' : 'Show Rules'}
      </button>

      {/* Display the rules when help is active */}
      {showHelp && (
        <div style={{ marginTop: '15px', maxWidth: '400px', margin: 'auto' }}>
          <h3>How to Play Hangman</h3>

          <p>
            The computer selects a random word and your goal is to guess the
            word one letter at a time. If you complete the word before the
            drawing is done, You Win! Each incorrect guess adds a piece to the
            hangman drawing. If the hangman drawing is completed first, Game
            Over!
          </p>
        </div>
      )}
    </div>
  );
}

//Export component
export default Help;
