import React from 'react';
import './App.css';
import Divisor from './components/Divisor';
import PanelIzquierdo from './components/PanelIzq';
import PanelDerecho from './components/PanelDerecho';

function App() {
  return (
    <div className="pokedex">

      <PanelIzquierdo />
      <Divisor />
      <PanelDerecho />

    </div>
  );
}

export default App;
