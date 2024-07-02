import './Tipos.css';
import ColoresTipos from './../utils/Colorestipos';

function Tipos ({ tipos }) {
    return (
        <div className='tipo'>
            <h2 className='titulo--destacado'>Tipos</h2>
            <div className="pantalla">
                <ul className='tipo__lista'>
                    {tipos.map((tipo) => (
                        <li className='tipo__item' key={tipo.type.name} style={{ background: ColoresTipos[tipo.type.name] }}>{tipo.type.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Tipos;