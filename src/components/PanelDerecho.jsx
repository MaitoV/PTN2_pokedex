import React, {} from 'react';
import Evoluciones from './Evoluciones';
import Estadisticas from './Estadisticas';
import BotonGrande from './Botones/BotonGrande';
import BotonEspecial from './Botones/BotonEspecial';
import Tipos from './Tipos';

function PanelDerecho({ pokemon, handlerNavigate, handlerProximoPokemon, handlerAnteriorPokemon, entrenadorSeleccionado  }) {
  const estadisticas = pokemon.estadisticas;
  const tipos = pokemon.tipos;
  const evoluciones = pokemon.evoluciones;
  

  return (
    <section className="panel">
      <div className="panel__fila">
        <Estadisticas estadisticas={estadisticas}/>
        <Tipos tipos ={tipos} />
      </div>
      <Evoluciones evoluciones={evoluciones} />
      <div className="panel__fila controles">
        <BotonGrande handler={handlerAnteriorPokemon} />
        <BotonEspecial nombre="elige tu entrenador" handler={handlerNavigate} />
        <BotonGrande handler={handlerProximoPokemon} />
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