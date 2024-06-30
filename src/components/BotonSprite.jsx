import './BotonSprite.css';
import reproducirSonido from '../utils/reproducirSonidos';

function BotonSprite ({icono, handler}) {
    const ejecutarAlClickear = () => {
        reproducirSonido();
        handler();
    }
    return (
        <button className="boton__sprite"><img className='icono__sprite' alt='deshacer' src={icono} onClick={ejecutarAlClickear}/></button>
    )
}

export default BotonSprite;