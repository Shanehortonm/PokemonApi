import React from "react";
import "./App.css";
import { PokemonsList, CapturedPokemons } from "./components/index";

function App() {
  return (
    <div>
      <PokemonsList />
      <CapturedPokemons />
    </div>
  );
}

export default App;
