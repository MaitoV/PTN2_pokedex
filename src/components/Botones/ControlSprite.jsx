import React from 'react';
import BotonSprite from './BotonSprite';
import iconoDeshacer from './../../assets/imagenes/deshacer-flecha.png';
import iconoFemenino from './../../assets/imagenes/signo-femenino.png';
import BotonEspecial from './BotonEspecial';
import './Controles.css';

function ControlSprite({ handlerShiny, handlerSprite, handlerSpriteFemenino, spriteEspalda, spriteFemenino, esShiny }) {
  return (
    <div className="controles">
      <BotonSprite icono={iconoFemenino} handler={handlerSpriteFemenino} activo={spriteFemenino} />
      <BotonEspecial nombre="shiny" handler={handlerShiny} activo={esShiny} />
      <BotonSprite icono={iconoDeshacer} handler={handlerSprite} activo={spriteEspalda} />
    </div>
  );
}

export default ControlSprite;
