const Arma = require("./Arma.js");

class Punio extends Arma{
    constructor(puntosAtaque = 3){
        super(puntosAtaque);
    }

    getPuntosAtaque(){
        return this._puntosAtaque;
    }
}

module.exports = Punio;