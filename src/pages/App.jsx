import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import obtenerPokemon from '../api/obtenerPokemon';
import Divisor from '../components/Divisor';
import PanelIzquierdo from './../components/PanelIzquierdo';
import PanelDerecho from '../components/PanelDerecho';
import Entrenadores from './Entrenadores';
import animacionPikachu from './../assets/imagenes/pikachu-corriendo.gif';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [descripcion, setDescripcion] = useState('');
  const [esShiny, setEsShiny] = useState(false);
  const [spriteEspalda, setSpriteEspalda] = useState(false);
  const [spriteFemenino, setSpriteFemenino] = useState(false);
  const [femeninoDisponible, setFemeninoDisponible] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemonID, setPokemonID] = useState(1);
  const [entrenadorSeleccionado, setEntrenadorSeleccionado] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerData = async() => {
      await obtenerPokemon(pokemonID, setPokemon, setDescripcion, setLoading, setError);
    }
    obtenerData()
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

  const handlerSpriteFemenino = () => {
    if (pokemon.sprites.front_female || pokemon.sprites.back_female) {
      setSpriteFemenino(!spriteFemenino);
    } else {
      setFemeninoDisponible(false);
      setTimeout(() => setFemeninoDisponible(true), 3000); 
    }
  };

  const handlerProximoPokemon = () => {
    setPokemonID((prevID) => (prevID === 898 ? 1 : prevID + 1));
  };

  const handlerAnteriorPokemon = () => {
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
            handlerSpriteFemenino={handlerSpriteFemenino} 
            spriteFemenino={spriteFemenino} 
            femeninoDisponible={femeninoDisponible}
          />
          <Divisor />
          <PanelDerecho 
            pokemon={pokemon} 
            handlerNavigate={handlerNavigate}
            handlerProximoPokemon={handlerProximoPokemon}
            handlerAnteriorPokemon={handlerAnteriorPokemon} 
            entrenadorSeleccionado={entrenadorSeleccionado}
          />
        </div>
      } />
         <Route path="/entrenadores" element={
        <div className="pokedex">
          <Entrenadores entrenadorSeleccionado={setEntrenadorSeleccionado} />
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
