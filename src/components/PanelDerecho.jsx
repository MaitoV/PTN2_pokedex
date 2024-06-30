import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BotonGrande from './BotonGrande';
import BotonEspecial from './BotonEspecial';
import SpritePequeño from './SpritePequeño';
import Tipos from './Tipos';
import './Controles.css';

function PanelDerecho({ pokemon, handlerNavigate, handlerNextPokemon, handlerPreviousPokemon, entrenadorSeleccionado  }) {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const estadisticas = pokemon.estadisticas;
  const tipos = pokemon.tipos;
  const evoluciones = pokemon.evoluciones;
  const navigate = useNavigate();
  const goToEntrenadores = () => {
    navigate('/entrenadores');
  };
  return (
    <section className="panel">
      <div className="panel__fila">
        <div className='pantalla estadisticas'>
          {
            estadisticas.map((estaditisca) =>
              <div key={estaditisca.stat.name} className='estadistica'>
                <span>{estaditisca.stat.name}</span>
                <span className='estadistica__separador'></span>
                <span>{estaditisca.base_stat}</span>
              </div>
            )
          }
        </div>
        <Tipos tipos ={tipos} />
      </div>
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
      <div className="panel__fila controles">
        <BotonGrande handler={handlerPreviousPokemon} />
        <BotonEspecial nombre="elige tu entrenador" handler={handlerNavigate} />
        <BotonGrande handler={handlerNextPokemon} />
      </div>
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

    </section>
  )
}

export default PanelDerecho;