class ProgramaTv{
    #powerRangers = "def power rangers";
    #enemigos = "def enemigos";
    #nombre = "def nombre";

    constructor(powerRangers, enemigos){
        this.#powerRangers = powerRangers;
        this.#enemigos = enemigos;
    }

    iniciaEpisodio(){
        /* this.#powerRangers[0].atacaA(this.#powerRangers[0]); // 3-2 = 1
        console.log(this.#enemigos[0].getNombre());
        this.#powerRangers[0].atacaA(this.#enemigos[0]); // 3-2 = 1
        this.#enemigos[0].atacaA(this.#powerRangers[0]);
        this.#enemigos[0].atacaA(this.#powerRangers[0]);
        this.#enemigos[0].atacaA(this.#powerRangers[0]);
        this.#powerRangers[0].atacaA(this.#enemigos[0]); // 1 > 0 
        this.#powerRangers[0].atacaA(this.#enemigos[0]); // -1  */
        this.iniciarPelea();
        this.verResultado();
    }

    /**
     * Muestra el resultado del combate entre los personajes
     */
    verResultado() {
        console.log("Power rangers que aun pueden pelear: " +  this.contarSobrevivientesDe(this.#powerRangers));
        console.log("Enemigos que aun pueden pelear: " + this.contarSobrevivientesDe(this.#enemigos));
    }

    contarSobrevivientesDe(sobrevivientes) {
        let cantSobrevivientes = 0;
        sobrevivientes.forEach(sobreviviente => {
            if (sobreviviente.getPuntosVida() > 0) {
                cantSobrevivientes++;
            }
        });
        return cantSobrevivientes;
    }

    iniciarPelea() {
        this.#powerRangers.forEach(powerRanger => {
            this.#enemigos.forEach(enemigo => {
                powerRanger.atacaA(enemigo);
                enemigo.atacaA(powerRanger);
                console.log('\x1b[36m%s\x1b[0m', "-------------");
            });
        });
    }
}

module.exports = ProgramaTv;