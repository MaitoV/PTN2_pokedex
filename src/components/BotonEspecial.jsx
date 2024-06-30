import './BotonSprite.css';
import './BotonEspecial.css';
import reproducirSonido from '../utils/reproducirSonidos';

function BotonEspecial ({nombre, handler}) {
    const ejecutarAlClickear = () => {
        reproducirSonido();
        handler();
    }
    return (
        <button className="boton__sprite boton__sprite--shiny" onClick={ejecutarAlClickear}>{nombre}</button>
    )
}

export default BotonEspecial;