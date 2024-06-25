function PokemonDescripcion({nombre, descripcion}) {
    console.log(nombre, descripcion)
    return(
        <div className="pantalla pokemon__descripcion">
            <p><span className="descripcion--darker">{nombre} </span> - {descripcion} </p>
        </div>
    )
}
export default PokemonDescripcion;