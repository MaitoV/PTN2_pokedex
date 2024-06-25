import iconoDeshacer from './../assets/deshacer-flecha.png';

function BotonesSprite({handlerShiny, handlerSprite}) {
    return(
        <div className="controles__sprite">
            <button className="boton__control"></button>
            <button className="boton__control boton__control--shiny" onClick={handlerShiny}>shiny</button>
            <button className="boton__control"><img className='icono__sprite' alt='deshacer' src={iconoDeshacer}  onClick={handlerSprite} /></button>
        </div>
    )
}

export default BotonesSprite;