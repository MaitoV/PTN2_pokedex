import React from 'react';
import './Estadisticas.css';

const Estadisticas = ({ estadisticas }) => (
  <div className='pantalla estadisticas'>
    {estadisticas.map((estadistica) => (
      <div key={estadistica.stat.name} className='estadistica'>
        <span>{estadistica.stat.name}</span>
        <span className='estadistica__separador'></span>
        <span>{estadistica.base_stat}</span>
      </div>
    ))}
  </div>
);

export default Estadisticas;