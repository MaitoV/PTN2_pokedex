import './BotonGrande.css';
import reproducirSonido from './../utils/reproducirSonidos.js';

function BotonGrande ({handler}) {
    const ejecutarAlClickear = () => {
        reproducirSonido();
        handler();
    }
    return (
        <button className="boton--grande" onClick={ejecutarAlClickear}></button>
    )
}

export default BotonGrande;