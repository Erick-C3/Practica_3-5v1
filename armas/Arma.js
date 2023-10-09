const ACTIVA = true;
const INACTIVA = false;

class Arma{
    _puntosAtaque;
    #sirve;
    constructor(puntosAtaque = 0, sirve = ACTIVA){
        this._puntosAtaque = puntosAtaque;
        this.#sirve = sirve;
    }


    getSirve(){
        return this.#sirve;
    }

    getPuntosAtaque(){
        let puntosAtaque = this._puntosAtaque;
        if (this.#sirve) {
            this._puntosAtaque -= 2;
            if (this._puntosAtaque <= 0) {
                this._puntosAtaque = 0;
                this.#sirve = INACTIVA;
                console.log("ARMA INACTIVA", this.constructor.name);
            }
        }
        return puntosAtaque;
    }
}

module.exports = Arma;