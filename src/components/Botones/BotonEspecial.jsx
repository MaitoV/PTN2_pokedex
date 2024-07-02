import './BotonEspecial.css';
import './BotonSprite.css';
import reproducirSonido from './../../utils/reproducirSonidos';

function BotonEspecial({ nombre, handler, activo }) {
  const ejecutarAlClickear = () => {
    reproducirSonido();
    handler();
  };

  return (
    <button className={`boton__sprite-shiny ${activo ? 'activo' : ''}`} onClick={ejecutarAlClickear}>
      {nombre}
    </button>
  );
}

export default BotonEspecial;
