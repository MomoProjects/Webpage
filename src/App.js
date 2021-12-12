import logo from './logo.svg';
import React from 'react';
import axios from 'axios';

function App() {
  return (
    <div className="App" id="Changed">
      <header className="App-header">
       <button onClick={() => {
         console.log("ehlo there")
         var obj = document.getElementById("Changed")
         obj.style.backgroundColor = "#FFD712"
       }} className="ChangeMe">Hello There you son of a bitch</button>
      </header>
    </div>
  );
}

export default App;
