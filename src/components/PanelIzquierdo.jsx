import React from 'react';
import ControlSprite from './ControlSprite';
import PokemonDescripcion from './PokemonDescripcion';
import PokemonNombre from './PokemonNombre';

function PanelIzquierdo({ pokemon, descripcion, handlerShiny, esShiny, handlerSprite, spriteEspalda, handlerSpriteFemenino, spriteFemenino, femeninoDisponible }) {
  const imagenUrl = esShiny 
    ? spriteEspalda 
      ? spriteFemenino 
        ? pokemon.sprites.back_shiny_female 
        : pokemon.sprites.back_shiny 
      : spriteFemenino 
        ? pokemon.sprites.front_shiny_female 
        : pokemon.sprites.front_shiny 
    : spriteEspalda 
      ? spriteFemenino 
        ? pokemon.sprites.back_female 
        : pokemon.sprites.back_default 
      : spriteFemenino 
        ? pokemon.sprites.front_female 
        : pokemon.sprites.front_default;

  return (
    <section className="panel">
      <PokemonNombre pokemonNombre={pokemon.nombre} pokemonID={pokemon.id} />
      {femeninoDisponible ? (
        <img alt={pokemon.nombre} src={imagenUrl} className="pokemon__sprite" />
      ) : (
        <p className="pokemon__sprite">Error, no hay imágenes del pokemón en su género femenino</p>
      )}
      <ControlSprite 
        handlerShiny={handlerShiny} 
        handlerSprite={handlerSprite} 
        handlerSpriteFemenino={handlerSpriteFemenino}
        spriteEspalda={spriteEspalda}
        spriteFemenino={spriteFemenino}
        esShiny={esShiny}
      />
      <PokemonDescripcion nombre={pokemon.nombre} descripcion={descripcion} />
    </section>
  );
}

export default PanelIzquierdo;
