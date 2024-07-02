import React, {} from 'react';
import Evoluciones from './Evoluciones';
import Estadisticas from './Estadisticas';
import BotonGrande from './Botones/BotonGrande';
import BotonEspecial from './Botones/BotonEspecial';
import Entrenador from './Entrenador';
import Tipos from './Tipos';

function PanelDerecho({ pokemon, handlerNavigate, handlerProximoPokemon, handlerAnteriorPokemon, entrenadorSeleccionado}) {
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
      < Entrenador entrenadorSeleccionado={entrenadorSeleccionado}/>

    </section>
  )
}

export default PanelDerecho;