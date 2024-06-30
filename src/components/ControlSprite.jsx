import BotonSprite from './BotonSprite';
import iconoDeshacer from './../assets/deshacer-flecha.png';
import iconoFemenino from './../assets/signo-femenino.png';
import BotonEspecial from './BotonEspecial';


function BotonesSprite({handlerShiny, handlerSprite}) {
    
    return(
        <div className="controles__sprite">
            <BotonSprite icono={iconoFemenino} />
            <BotonEspecial nombre="shiny" handler={handlerShiny} />
            <BotonSprite icono={iconoDeshacer} handler={handlerSprite}/>
        </div>
    )
}

export default BotonesSprite;