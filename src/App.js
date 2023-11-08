import React from 'react';

// Create a simple GUI with a title "Computer Vision" and input field for typing in a URL, a button "Analyze" and another button "Generate". 
// The "Analyze" button should display the image and the "Generate" button should display the image with a caption. 
// The caption should be generated using the Microsoft Computer Vision API. 
// You can use the API key from the last assignment. 
// The caption should be displayed on the image with a black background.

function App() {
  return (
    <div className="App">
      <h1>Computer Vision</h1>
      <input type="text" placeholder="Enter URL here"></input>
      <button>Analyze</button>
      <br />
      <button>Generate</button>
    </div>
  );
}

export default App;
