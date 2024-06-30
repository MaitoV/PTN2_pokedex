import BotonSprite from './BotonSprite';
import iconoDeshacer from './../assets/imagenes/deshacer-flecha.png';
import iconoFemenino from './../assets/imagenes/signo-femenino.png';
import BotonEspecial from './BotonEspecial';
import './Controles.css';


function BotonesSprite({handlerShiny, handlerSprite}) {
    
    return(
        <div className="controles">
            <BotonSprite icono={iconoFemenino} />
            <BotonEspecial nombre="shiny" handler={handlerShiny} />
            <BotonSprite icono={iconoDeshacer} handler={handlerSprite}/>
        </div>
    )
}

export default BotonesSprite;