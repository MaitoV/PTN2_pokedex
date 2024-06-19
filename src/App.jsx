import React, { useEffect, useState } from 'react';
import './App.css';
import Divisor from './components/Divisor';
import PanelIzquierdo from './components/PanelIzq';
import PanelDerecho from './components/PanelDerecho';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const randomID = Math.floor(Math.random() * 898) + 1;
        const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomID}`);
        setPokemon(respuesta.data);
      } catch (error) {
        console.error("Error al obtener un pokemon", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);
  if (loading) {
    return <p>Loading...</p>; 
  }

  if (error) {
    return <p>Error al cargar el Pokémon. Por favor, intenta de nuevo.</p>;
  }
  return (
    <div className="pokedex">

      <PanelIzquierdo pokemon={pokemon} />
      <Divisor />
      <PanelDerecho pokemon={pokemon} />

    </div>
  );
}

export default App;
