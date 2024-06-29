import React from 'react';
import BotonesSprite from './BotonesSprite';
import PokemonDescripcion from './PokemonDescripcion';
import PokemonNombre from './PokemonNombre';

function PanelIzquierdo({ pokemon, descripcion, handlerShiny, esShiny, handlerSprite, spriteEspalda, handlerNextPokemon, handlerPreviousPokemon }) {
  const imagenUrl = esShiny ? spriteEspalda ? pokemon.sprites.back_shiny : pokemon.sprites.front_shiny : spriteEspalda ? pokemon.sprites.back_default : pokemon.sprites.front_default;

  return (
    <section className="panel">
      <PokemonNombre pokemonNombre={pokemon.nombre} pokemonID={pokemon.id} />
      <img alt={pokemon.nombre} src={imagenUrl} className="pokemon__sprite" />
      <BotonesSprite 
        handlerShiny={handlerShiny} 
        handlerSprite={handlerSprite} 
        handlerNextPokemon={handlerNextPokemon} 
        handlerPreviousPokemon={handlerPreviousPokemon} 
      />
      <PokemonDescripcion nombre={pokemon.nombre} descripcion={descripcion} />
    </section>
  );
}

export default PanelIzquierdo;

