import React from 'react';
import './App.css';
import iconoDeshacer from './assets/deshacer-flecha.png';

function App() {
  return (
    <div className="pokedex">

      <section className="panel">
        <h1 className="pokemon__nombre pantalla"> Bulbasur
          <span className="pokemon__numero">no. 11</span>
        </h1>
        <img alt="pokemon" src="" className="pokemon__sprite"></img>
        <div className="controles__sprite">
            <button className="boton__control"></button>
            <button className="boton__control boton__control--shiny">shiny</button>
            <button className="boton__control"><img className='icono__sprite' alt='deshacer' src={iconoDeshacer} /></button>
        </div>
        <div className="pantalla"></div>
        <div className="pokemon__descripcion"></div>
      </section>

      <div className="divisor">
        <div className="bisagra"></div>
        <div className="espacio"></div>
        <div className="bisagra"></div>
        <div className="espacio"></div>
        <div className="bisagra"></div>
        <div className="espacio"></div>
        <div className="bisagra"></div>
      </div>

      <section className="panel">
          <div className="visor__fila"></div>
          <div className="visor__fila"></div>
          <div className="visor__fila"></div>
      </section>
    </div>
  );
}

export default App;
