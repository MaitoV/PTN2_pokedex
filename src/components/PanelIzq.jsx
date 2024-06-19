import React from 'react';
import BotonesSprite from './BotonesSprite';
import PokemonDescripcion from './PokemonDescripcion';
import PokemonNombre from './PokemonNombre';

function PanelIzquierdo({pokemon}) {
  console.log(pokemon);
    return(
        <section className="panel">
        <PokemonNombre pokemonNombre={pokemon.name} pokemonID={pokemon.id} />
        <img alt={pokemon.name.toString()} src={pokemon.sprites.front_default} className="pokemon__sprite"></img>
        <BotonesSprite />
        <PokemonDescripcion />
      </section>
    )
}

export default PanelIzquierdo;