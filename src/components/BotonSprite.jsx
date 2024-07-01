import './BotonSprite.css';
import reproducirSonido from '../utils/reproducirSonidos';

function BotonSprite ({ icono, handler, activo }) {
    const ejecutarAlClickear = () => {
      reproducirSonido();
      handler();
    };
  
    return (
      <button className={`boton__sprite ${activo ? 'activo' : ''}`} onClick={ejecutarAlClickear}>
        <img className='icono__sprite' alt='deshacer' src={icono} />
      </button>
    );
  }
  
  export default BotonSprite;