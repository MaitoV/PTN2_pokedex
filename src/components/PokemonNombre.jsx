function PokemonNombre({pokemonNombre, pokemonID}) {
    return(
        <h1 className="pokemon__nombre pantalla"> {pokemonNombre}
          <span className="pokemon__numero">no. {pokemonID}</span>
        </h1>
    )
}
export default PokemonNombre;