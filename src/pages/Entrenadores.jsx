import React from 'react';
import './Entrenadores.css';
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
    <section className='entrenadores'>
        <h2 className='titulo--destacado'>ENTRENADORES</h2>
          <div className="sprites__entrenadores">
          <div className='entrenador__box' onClick={() => seleccionarEntrenador({ nombre: 'Maite', imagen: entrenadorMaite, medallas: ['medalla1', 'medalla2', 'medalla3'] })}>
            <h2 className='entrenador__numero'>I</h2>
            <img alt="pokemon" src={entrenadorMaite} className="pokemon__sprite pokemon__sprite--pequenio" />
            <p className='pantalla'> Maite</p>
          </div>
          <div className='entrenador__box' onClick={() => seleccionarEntrenador({ nombre: 'Alan', imagen: entrenadorAlan, medallas: ['medalla1'] })}>
            <h2 className='entrenador__numero'>II</h2>
            <img alt="pokemon" src={entrenadorAlan} className="pokemon__sprite pokemon__sprite--pequenio" />
            <p className='pantalla'> Alan</p>
          </div>
          <div className='entrenador__box' onClick={() => seleccionarEntrenador({ nombre: 'Guido', imagen: entrenadorGuido, medallas: ['medalla3', 'medalla4', 'medalla5'] })}>
            <h2 className='entrenador__numero'>III</h2>
            <img alt="pokemon" src={entrenadorGuido} className="pokemon__sprite pokemon__sprite--pequenio" />
            <p className='pantalla'> Guido</p>
          </div>
        </div>
    </section>
  );
}

export default Entrenadores;