import './BotonSprite.css';

function BotonSprite ({icono, handler}) {
    return (
        <button className="boton__sprite"><img className='icono__sprite' alt='deshacer' src={icono} onClick={handler}/></button>
    )
}

export default BotonSprite;