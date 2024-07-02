const obtenerEvoluciones = (cadena) => {
  let evoluciones = [];
  let cadenaActual = cadena;

  while (cadenaActual) {
    evoluciones.push({
      id: cadenaActual.species.url.split('/').slice(-2, -1)[0],
      nombre: cadenaActual.species.name
    });
    cadenaActual = cadenaActual.evolves_to[0];
  }

  return evoluciones;
};


  export default obtenerEvoluciones;