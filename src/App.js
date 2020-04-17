import React, {useState, useEffect} from 'react';
import Charmander from './components/Charmander';
import Squirtle from './components/Squirtle';
import Bulbasaur from './components/Bulbasaur';
import Pikachu from './components/Pikachu';
import './App.css';


function App() {
  const [page, setPage] = useState("pikachu")
  const [pokemon, setPokemon] = useState({})
  const handleClick = e => {
    setPage(e.target.id)
  }
  const paginacion = {
    charmander: <Charmander  nombre={pokemon.name} peso={pokemon.weight} altura={pokemon.height} img={pokemon.sprites && pokemon.sprites.front_default}/>,
    squirtle: <Squirtle nombre={pokemon.name} peso={pokemon.weight} altura={pokemon.height}img={pokemon.sprites && pokemon.sprites.front_default}/>,
    bulbasaur: <Bulbasaur nombre={pokemon.name} peso={pokemon.weight} altura={pokemon.height}img={pokemon.sprites && pokemon.sprites.front_default}/>,
    pikachu: <Pikachu nombre={pokemon.name} peso={pokemon.weight} altura={pokemon.height}img={pokemon.sprites && pokemon.sprites.front_default}/>,

  }
  useEffect(()=> {
    fetch(`https://pokeapi.co/api/v2/pokemon/${page}`)
    .then(res => res.json())
    .then(data => setPokemon(data))
  }, [page])
  

  return (
    <div className="App">
      <h1>Pokemones</h1>
      <section>
        <button id="charmander" onClick={handleClick}>Charmander</button>
        <button id="squirtle" onClick={handleClick}>Squirtle</button>
        <button id="bulbasaur" onClick={handleClick}>Bulbasaur</button>
        <button id="pikachu" onClick={handleClick}>Pikachu</button>
      </section>
      {paginacion[page]}
    </div>
  );
}
export default App;