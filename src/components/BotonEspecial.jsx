import './BotonSprite.css';
import './BotonEspecial.css';

function BotonEspecial ({nombre, handler}) {
    return (
        <button className="boton__sprite boton__sprite--shiny" onClick={handler}>{nombre}</button>
    )
}

export default BotonEspecial;