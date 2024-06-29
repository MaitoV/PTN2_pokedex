import React from 'react';
import { useNavigate } from 'react-router-dom';
import BotonNavigate from './BotonNavigate';

function PanelDerecho({pokemon, handlerNavigate}) {
  const estadisticas = pokemon.estadisticas;
  const tipos = pokemon.tipos;
  const navigate = useNavigate();

  const goToEntrenadores = () => {
    navigate('/entrenadores');
  };
    return(
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
            <div>
              <h2>I</h2>
              <img alt="pokemon" src="" className="pokemon__sprite pokemon__sprite--pequenio"></img>
              <p className='pantalla'> Bulbasur</p>
            </div>
            <div>
              <h2>II</h2>
              <img alt="pokemon" src="" className="pokemon__sprite pokemon__sprite--pequenio"></img>
              <p className='pantalla'> Charizard</p>
            </div>
            <div>
              <h2>III</h2>
              <img alt="pokemon" src="" className="pokemon__sprite pokemon__sprite--pequenio"></img>
              <p className='pantalla'> Snorlak</p>
            </div>
          </div>
          <div className="panel__fila"></div>
          <div className="panel__fila">
          <BotonNavigate 
        handlerNavigate={handlerNavigate}/>
      </div>

      </section>
    )
}

export default PanelDerecho;