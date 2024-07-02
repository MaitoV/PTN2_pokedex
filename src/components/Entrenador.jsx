import React from 'react';
import './Entrenador.css';

const Entrenador = ({ entrenadorSeleccionado }) => (
  <div>
    <h2 className="titulo__evolucion  titulo--destacado">Entrenador</h2>
    {entrenadorSeleccionado && (
      <div className='entrenador__elegido'>
        <img src={entrenadorSeleccionado.imagen} alt={entrenadorSeleccionado.nombre} className='entrenador__imagen' />
        <p className='pantalla entrenador__nombre'>{entrenadorSeleccionado.nombre}</p>
        <ul className='listado__medallas'>
          {entrenadorSeleccionado.medallas.map((medalla, index) => (
            <li key={index}>
              <img className='medalla' 
                src={`/assets/medallas/${medalla}.png`} 
                alt={`Medalla ${index + 1}`} 
              />
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default Entrenador;