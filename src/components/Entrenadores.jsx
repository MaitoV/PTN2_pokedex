import React from 'react';
import { useNavigate } from 'react-router-dom';
import entrenadorAlan from './../assets/imagenes/entrenador-alan.png';
import entrenadorGuido from './../assets/imagenes/entrenador-guido.png';
import entrenadorMaite from './../assets/imagenes/entrenador-maite.png';

function Entrenadores({entrenadorSeleccionado}) {
  const navigate = useNavigate();

  const seleccionarEntrenador = (entrenador) => {
    entrenadorSeleccionado(entrenador);
    navigate('/');
  };

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
        <div onClick={() => seleccionarEntrenador({ nombre: 'Maite', imagen: entrenadorMaite, medallas: ['medalla1', 'medalla2', 'medalla3'] })}>
          <h2>I</h2>
          <img alt="pokemon" src={entrenadorMaite} className="pokemon__sprite pokemon__sprite--pequenio" />
          <p className='pantalla'> Maite</p>
        </div>
        <div onClick={() => seleccionarEntrenador({ nombre: 'Alan', imagen: entrenadorAlan, medallas: ['medalla1'] })}>
          <h2>II</h2>
          <img alt="pokemon" src={entrenadorAlan} className="pokemon__sprite pokemon__sprite--pequenio" />
          <p className='pantalla'> Alan</p>
        </div>
        <div onClick={() => seleccionarEntrenador({ nombre: 'Guido', imagen: entrenadorGuido, medallas: ['medalla3', 'medalla4', 'medalla5'] })}>
          <h2>III</h2>
          <img alt="pokemon" src={entrenadorGuido} className="pokemon__sprite pokemon__sprite--pequenio" />
          <p className='pantalla'> Guido</p>
        </div>
      </div>
   
     
    </section>
  );
}

export default Entrenadores;