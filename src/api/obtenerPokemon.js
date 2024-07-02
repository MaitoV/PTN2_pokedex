import axios from 'axios';
import obtenerEvoluciones from './obtenerEvoluciones.js';
import obtenerSpriteEvolucion from './obtenerSpriteEvolucion.js';

const obtenerPokemon = async (id, setPokemon, setDescripcion, setLoading, setError) => {
  try {
    setLoading(true);
    setError(null);
    const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = respuesta.data;
    const pokemon = { id: data.id, nombre: data.name, sprites: data.sprites, tipos: data.types, estadisticas: data.stats, evoluciones: [] };

    const obtenerEspecies = await axios.get(data.species.url);
    const especiesData = obtenerEspecies.data;
    const textoDescripcion = especiesData.flavor_text_entries.find(entry => entry.language.name === 'es');
    const descripcionFormateada = textoDescripcion ? textoDescripcion.flavor_text : 'Descripción no disponible.';
    setDescripcion(descripcionFormateada);

    const obtenerCadenaEvolutiva = await axios.get(especiesData.evolution_chain.url);
    const cadenaEvolutiva = obtenerCadenaEvolutiva.data.chain;
    const evoluciones = obtenerEvoluciones(cadenaEvolutiva);
    const spriteEvoluciones = await obtenerSpriteEvolucion(evoluciones);
    pokemon.evoluciones = spriteEvoluciones;

    setPokemon(pokemon);
  } catch (error) {
    console.error("Error al obtener un pokemon", error);
    setError(error);
  } finally {
    setLoading(false);
  }
};

export default obtenerPokemon;