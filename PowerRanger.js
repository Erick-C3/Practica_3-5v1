const Enemigo = require("./Enemigo.js");
const Personaje = require("./Personaje.js");

const COLOR_POWER_RANGER = '\x1b[32m%s\x1b[0m';


class PowerRanger extends Personaje{

    constructor(nombre, puntosAtaque, puntosVida, arma){
        super(nombre, puntosAtaque, puntosVida, COLOR_POWER_RANGER, arma);
    }

    decimeComoTeLlamas(){
        console.log("Hola! soy power ranger "+ this.getNombre());
    }
}

module.exports = PowerRanger;