const Punio = require("./armas/Punio");

class Personaje{
    #nombre = "def nombre";
    #puntosAtaque = 0;
    #puntosVida = 0;
    #color = "def color";
    #arma;

    /**
     * Inicializa un objeto personaje
     * @param {String} nombre del personaje 
     * @param {Number} puntosAtaque del personaje 
     * @param {Number} puntosVida del personaje 
     */
    constructor(nombre, puntosAtaque, puntosVida, color, arma = new Punio(0)){
        this.#nombre = nombre;
        this.#arma = arma;
        this.#puntosAtaque = puntosAtaque;
        this.#puntosVida = puntosVida;
        this.#color = color;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }

    getPuntosVida(){
        return this.#puntosVida;
    }
    setPuntosVida(puntosVida){
        this.#puntosVida = puntosVida;
    }
    
    setPuntosAtaque(puntosAtaque){
        this.#puntosAtaque = puntosAtaque;
    }

    getPuntosAtaque(){
        return this.#puntosAtaque;
    }

    obtenerPuntosAtaqueTotal(){
        if (!this.#arma.getSirve()) {
            this.#arma = new Punio();
            console.log("Cambiando a "+ this.#arma.constructor.name);
        }
        return this.#puntosAtaque + this.#arma.getPuntosAtaque();
    }

    /**
     * Ataca a un enemigo si el PowerRanger y el enemigo tienen puntos de vida
     * @param {Enemigo} unEnemigo 
     */
    atacaA(unEnemigo){
        if (this.#puntosVida > 0) {
            if (unEnemigo.getPuntosVida() > 0) {
                console.log(this.#color,"Estoy atacando a "+ unEnemigo.getNombre());
                unEnemigo.defendeteDe(this);
            }else{
                console.log(this.#color,"El enemigo " + unEnemigo.getNombre()+ " esta muy debil para pelear");
            }
        }else{
            console.log(this.#color,"Estoy muy debil para atacar");
        }
    }
    
    defendeteDe(unEnemigo){
        console.log(this.#color,"Me estoy defendiendo de " + unEnemigo.getNombre());
        this.#puntosVida -= unEnemigo.obtenerPuntosAtaqueTotal();
        if (this.#puntosVida <= 0) {
            console.log(this.#color,"Perdi");
        }else{
            console.log(this.#color,"Me quedan "+ this.#puntosVida + " de vida");
            this.atacaA(unEnemigo);
        }
    }
}

module.exports = Personaje;