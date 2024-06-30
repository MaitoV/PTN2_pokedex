import sonido from './../assets/sonidos/click-boton.wav';

const reproducirSonido = () => {
    const audio = new Audio(sonido);
    audio.play();
};

export default reproducirSonido;
  