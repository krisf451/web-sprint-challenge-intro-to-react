import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  //set up state for the character data, starts as an empty array
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/`)
      .then(res => {
        console.log(res.data);
        //set characters array to the data returned from the API
        setCharacters(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  //test change
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">REACT WARS!!!!</h1>
      <Character characters={characters} />
    </div>
  );
};

export default App;
