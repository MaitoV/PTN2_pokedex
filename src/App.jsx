import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Divisor from './components/Divisor';
import PanelIzquierdo from './components/PanelIzquierdo';
import PanelDerecho from './components/PanelDerecho';
import axios from 'axios';
import Entrenadores from './components/Entrenadores';
import animacionPikachu from './assets/imagenes/pikachu-corriendo.gif';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [descripcion, setDescripcion] = useState('');
  const [esShiny, setEsShiny] = useState(false);
  const [spriteEspalda, setSpriteEspalda] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemonID, setPokemonID] = useState(1);
  const navigate = useNavigate();

  const fetchPokemon = async (id) => {
    try {
      setLoading(true);
      setError(null);
      const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = respuesta.data;
      const pokemon = { id: data.id, nombre: data.name, sprites: data.sprites, tipos: data.types, estadisticas: data.stats, evoluciones: [] };

      const obtenerEspecies = await axios.get(data.species.url);
      const especiesData = obtenerEspecies.data;
      const textoDescripcion = especiesData.flavor_text_entries.find(entry => entry.language.name === 'es');
      const descripcionFormateada = textoDescripcion ? textoDescripcion.flavor_text : 'Descripción no disponible.';
      setDescripcion(descripcionFormateada);

      const obtenerCadenaEvolutiva = await axios.get(especiesData.evolution_chain.url);
      const cadenaEvolutiva = obtenerCadenaEvolutiva.data.chain;
      const evoluciones = obtenerEvoluciones(cadenaEvolutiva);
      const spriteEvoluciones = await obtenerSpriteEvolucion(evoluciones);
      pokemon.evoluciones = spriteEvoluciones;

      setPokemon(pokemon);
    } catch (error) {
      console.error("Error al obtener un pokemon", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  
  const obtenerEvoluciones = (cadena) => {
    let evoluciones = [];
    let cadenaActual = cadena;

    while (cadenaActual) {
      evoluciones.push({
        id: cadenaActual.species.url.split('/').slice(-2, -1)[0],
        nombre: cadenaActual.species.name
      });
      cadenaActual = cadenaActual.evolves_to[0];
    }

    return evoluciones;
  };
  const obtenerSpriteEvolucion = async (evoluciones) => {
    const evolucionesData = [];
    for (const evolucion of evoluciones) {
      const evolucionData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${evolucion.id}`);
      const evolucionSprites = evolucionData.data.sprites.front_default;
      evolucionesData.push({
        nombre: evolucion.nombre,
        sprite: evolucionSprites
      });
    }
    return evolucionesData;
  }

  useEffect(() => {
    fetchPokemon(pokemonID);
  }, [pokemonID]);

  if (loading) {
    return (
    <div className='pantalla__carga'>
      <img className='animacion__carga' src={animacionPikachu} alt="pikachu corriendo"></img>
      <h1>Cargando...</h1>
    </div>
  )}; 

  if (error) {
    return <p>Error al cargar el Pokémon. Por favor, intenta de nuevo.</p>;
  }

  const handlerShiny = () => {
    setEsShiny(!esShiny);
  };

  const handlerSprite = () => {
    setSpriteEspalda(!spriteEspalda);
  };

  const handlerNextPokemon = () => {
    setPokemonID((prevID) => (prevID === 898 ? 1 : prevID + 1));
  };

  const handlerPreviousPokemon = () => {
    setPokemonID((prevID) => (prevID === 1 ? 898 : prevID - 1));
  };

  const handlerNavigate = () => {
    navigate('/entrenadores');
  };

  return (
    <Routes>
      <Route path="/" element={
        <div className="pokedex">
          <PanelIzquierdo 
            pokemon={pokemon} 
            descripcion={descripcion} 
            handlerShiny={handlerShiny} 
            esShiny={esShiny} 
            handlerSprite={handlerSprite} 
            spriteEspalda={spriteEspalda} 
          />
          <Divisor />
          <PanelDerecho 
            pokemon={pokemon} 
            handlerNavigate={handlerNavigate}
            handlerNextPokemon={handlerNextPokemon}
            handlerPreviousPokemon={handlerPreviousPokemon} 
          />
        </div>
      } />
      <Route path="/entrenadores" element={
        <div className="pokedex">
          <Entrenadores 
          
          />
        </div>
      } />
    </Routes>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
