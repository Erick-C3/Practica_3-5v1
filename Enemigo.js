const Personaje = require("./Personaje.js");
const PowerRanger = require("./PowerRanger.js");

const COLOR_ENEMIGO = '\x1b[31m%s\x1b[0m';


class Enemigo extends Personaje{
    constructor(nombre, puntosAtaque, puntosVida, arma){
        super(nombre, puntosAtaque, puntosVida, COLOR_ENEMIGO, arma);
    }
}


module.exports = Enemigo;