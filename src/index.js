/** @format */

//Import React to create components
import React from 'react';
import ReactDOM from 'react-dom/client';

//Import the main app component
import App from './App';

//Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

//Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
