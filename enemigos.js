const Enemigo = require("./Enemigo.js");
const Punio = require("./armas/Punio.js");

const enemigos = [
    new Enemigo("Lord Zedd", 0, 300, new Punio())/* ,
    new Enemigo("enemigo 1", 3, 5),
    new Enemigo("enemigo 2", 2, 2),
    new Enemigo("enemigo 3", 5, 1) */
];

module.exports = enemigos;