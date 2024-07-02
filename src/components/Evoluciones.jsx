import React from 'react';
import SpritePequeño from './SpritePequeño';

const Evoluciones = ({ evoluciones }) => (
  <div>
    <h2 className="titulo__evolucion  titulo--destacado">Evoluciones</h2>
    <div className="sprites__pequenios">
      {evoluciones[0] && (
        <SpritePequeño posicion="I" nombre={evoluciones[0].nombre} sprite={evoluciones[0].sprite} />
      )}
      {evoluciones[1] && (
        <SpritePequeño posicion="II" nombre={evoluciones[1].nombre} sprite={evoluciones[1].sprite} />
      )}
      {evoluciones[2] && (
        <SpritePequeño posicion="III" nombre={evoluciones[2].nombre} sprite={evoluciones[2].sprite} />
      )}
    </div>
  </div>
);

export default Evoluciones;