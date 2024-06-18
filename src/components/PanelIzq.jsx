import React from 'react';
import BotonesSprite from './BotonesSprite';
import PokemonDescripcion from './PokemonDescripcion';
import PokemonNombre from './PokemonNombre';

function PanelIzquierdo() {
    return(
        <section className="panel">
        <PokemonNombre />
        <img alt="pokemon" src="" className="pokemon__sprite"></img>
        <BotonesSprite />
        <div className="pantalla"></div>
        <PokemonDescripcion />
      </section>
    )
}

export default PanelIzquierdo;