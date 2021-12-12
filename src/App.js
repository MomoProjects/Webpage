import React, { useState } from 'react';
import axios from 'axios';

function App() {
  let [pokemonList, setPokemonList] = useState({})
  return (
    <div className="App" id="Changed">
      <header className="App-header">
       <button onClick={() => {
         console.log("ehlo there")
         var obj = document.getElementById("Changed")
         obj.style.backgroundColor = "#FFD712"
         axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then(
           res => {
             console.log("This is res.data\n" + res.data)
             setPokemonList(res.data)
           }
         )
         console.log("this is pokemonList\n" + pokemonList)
       }
       } className="ChangeMe">Hello There you son of a bitch</button>
      </header>
      <div>
        {pokemonList.name}
      </div>
    </div>
  );
}

export default App;
