import React, { useEffect, useState } from 'react';
import './App.css';
import Divisor from './components/Divisor';
import PanelIzquierdo from './components/PanelIzq';
import PanelDerecho from './components/PanelDerecho';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [descripcion, setDescripcion] = useState('');
  const [esShiny, setEsShiny] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const randomID = Math.floor(Math.random() * 898) + 1;
        let respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomID}`);
        respuesta = respuesta.data;
        setPokemon(respuesta);

        const obtenerEspecies = await axios.get(respuesta.species.url);
        const especiesData = obtenerEspecies.data;
        const textoDescripcion = especiesData.flavor_text_entries.find(entry => entry.language.name === 'es');
        const descripcionFormateada = textoDescripcion.flavor_text;
        setDescripcion(descripcionFormateada);

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

      <PanelIzquierdo pokemon={pokemon} descripcion={descripcion} />
      <Divisor />
      <PanelDerecho pokemon={pokemon} />

    </div>
  );
}

export default App;
