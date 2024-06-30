import './SpritePequeño.css';

function SpritePequeño ({posicion, nombre, sprite}) {
   return(
    <div>
        <h2>{posicion}</h2>
        <img alt="pokemon" src={sprite} className="pokemon__sprite pokemon__sprite--pequenio"></img>
        <p className='pantalla'>{nombre}</p>
    </div>
   )
}

export default SpritePequeño;