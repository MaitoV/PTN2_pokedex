import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BotonGrande from './BotonGrande';
import BotonEspecial from './BotonEspecial';
import SpritePequeño from './SpritePequeño';

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
        <div className='tipo'>
          <h2 className='tipo__titulo'>Tipos</h2>
          <div className='tipo__lista'>
            {
              tipos.map((tipo) =>
                <p className='tipo' key={tipo.type.name}>{tipo.type.name}</p>
              )
            }
          </div>
        </div>
      </div>
      <div className="panel__fila sprites__pequenios">
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
      <div className="panel__fila">

      </div>
      <div className="panel__fila controles">
        <BotonGrande handler={handlerPreviousPokemon} />
        <BotonEspecial nombre="elige tu entrenador" handler={handlerNavigate} />
        <BotonGrande handler={handlerNextPokemon} />
      </div>

      {entrenadorSeleccionado && (
          <div className='entrenador'>
            <p className="entrenador__nombre">{entrenadorSeleccionado.nombre}</p>
            <img src={entrenadorSeleccionado.imagen} alt={entrenadorSeleccionado.nombre} className='entrenador__imagen' />
            
          </div>
        )}

    </section>
  )
}

export default PanelDerecho;