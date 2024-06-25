import React from 'react';
import BotonesSprite from './BotonesSprite';
import PokemonDescripcion from './PokemonDescripcion';
import PokemonNombre from './PokemonNombre';

function PanelIzquierdo({pokemon, descripcion, handlerShiny, esShiny}) {
    return(
        <section className="panel">
        <PokemonNombre pokemonNombre={pokemon.nombre} pokemonID={pokemon.id} />
        <img alt={pokemon.nombre} src={esShiny? pokemon.sprites.front_shiny : pokemon.sprites.front_default} className="pokemon__sprite"></img>
        <BotonesSprite handlerShiny={handlerShiny} />
        <PokemonDescripcion nombre={pokemon.nombre} descripcion={descripcion}/>
      </section>
    )
}

export default PanelIzquierdo;