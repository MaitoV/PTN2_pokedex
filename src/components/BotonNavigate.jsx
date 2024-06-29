
function BotonNavigate({handlerNavigate}) {
    
    return(
        <div className="controles__sprite">
            <button className="boton__control--entrenadores" onClick={handlerNavigate}>ELIGE TU ENTRENADOR</button>
        </div>
    )
}

export default BotonNavigate;