const Arma = require("./Arma.js");

class Espada extends Arma{
    constructor(puntosAtaque = 10){
        super(puntosAtaque);
    }
}

module.exports = Espada;