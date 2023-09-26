// diferencias entre const y let

const vector = [true, false];

let contenedor = [true, false];

/* contenedor = 2; */
vector[0] = 2;

console.log(vector, contenedor);