import React from 'react';

function PanelDerecho() {
    return(
        <section className="panel">
          <div className="panel__fila">
            <div className='pantalla estadisticas'></div>
            <div className='tipo'>
                <h2 className='tipo__titulo'>Tipos</h2>
                <div className='tipo__lista'>
                  <p>Agua</p>
                  <p>Veneno</p>
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
      </section>
    )
}

export default PanelDerecho;