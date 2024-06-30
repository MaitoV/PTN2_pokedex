import './BotonGrande.css';

function BotonGrande ({handler}) {
    return (
        <button className="boton--grande" onClick={handler}></button>
    )
}

export default BotonGrande;