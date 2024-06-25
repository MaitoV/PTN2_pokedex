import iconoDeshacer from './../assets/deshacer-flecha.png';

function BotonesSprite() {
    return(
        <div className="controles__sprite">
            <button className="boton__control"></button>
            <button className="boton__control boton__control--shiny" onClick={obtenerShiny}>shiny</button>
            <button className="boton__control"><img className='icono__sprite' alt='deshacer' src={iconoDeshacer} /></button>
        </div>
    )
}

export default BotonesSprite;