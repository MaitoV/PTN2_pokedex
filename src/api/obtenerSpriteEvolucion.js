import axios from 'axios';

const obtenerSpriteEvolucion = async (evoluciones) => {
    const evolucionesData = [];
    for (const evolucion of evoluciones) {
      const evolucionData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${evolucion.id}`);
      const evolucionSprites = evolucionData.data.sprites.front_default;
      evolucionesData.push({
        nombre: evolucion.nombre,
        sprite: evolucionSprites
      });
    }
    return evolucionesData;
}

export default obtenerSpriteEvolucion;