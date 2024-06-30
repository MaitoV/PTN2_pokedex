import React from 'react';
import entrenadorAlan from './../assets/entrenador-alan.png';
import entrenadorGuido from './../assets/entrenador-guido.png';
import entrenadorMaite from './../assets/entrenador-maite.png';

function Entrenadores() {
  return (
    <section className="panel">
      <div className="panel__fila">
       
        <div className='tipo'>
          <h2 className='tipo__titulo'>ENTRENADORES</h2>
          <div className='tipo__lista'>
            {
           
            }
          </div>
        </div>
      </div>
      <div className="panel__fila sprites__pequenios">
        <div>
          <h2>I</h2>
          <img alt="pokemon" src={entrenadorMaite}  className="pokemon__sprite pokemon__sprite--pequenio"></img>
          <p className='pantalla'> Maite</p>
        </div>
        <div>
          <h2>II</h2>
          <img alt="pokemon" src={entrenadorAlan} className="pokemon__sprite pokemon__sprite--pequenio"></img>
          <p className='pantalla'> Alan</p>
        </div>
        <div>
          <h2>III</h2>
          <img alt="pokemon" src={entrenadorGuido} className="pokemon__sprite pokemon__sprite--pequenio"></img>
          <p className='pantalla'> Guido</p>
        </div>
      </div>
   
     
    </section>
  );
}

export default Entrenadores;