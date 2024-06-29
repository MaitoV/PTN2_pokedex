import iconoDeshacer from './../assets/deshacer-flecha.png';


function BotonesSprite({handlerShiny, handlerSprite, handlerNextPokemon, handlerPreviousPokemon}) {
    
    return(
        <div className="controles__sprite">
            <button className="boton__control" onClick={handlerPreviousPokemon}></button>
            <button className="boton__control boton__control--shiny" onClick={handlerShiny}>shiny</button>
            <button className="boton__control"><img className='icono__sprite' alt='deshacer' src={iconoDeshacer} onClick={handlerSprite} /></button>
            <button className="boton__control" onClick={handlerNextPokemon}></button>
        </div>
    )
}

export default BotonesSprite;