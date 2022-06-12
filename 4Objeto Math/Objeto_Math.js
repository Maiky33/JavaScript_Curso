/*//Objeto Math//

Objeto estatico

Tenemos que usar su nombre para utilizarlo

//Propiedades//

Math.E Math.Pi

Metodos:

Math.abs(x) Devuelve el valor absoluto de x
Math.ceil(x) Devuelve el entero mas grande mayor o igual que un numero.
Math.floor(x) Devuelve el entero mas pequeño menor o igual que un numero.
Math.pow(x, y) Devuelve la potencia de x elevado a y.
Math.sqrt(x) Devuelve la raiz cuadrada de x.
Math.random(x) Genera un numero pseudoaleatorio entre 0 y 1.
Math.round(x) Devuelve el valor de un numero redondeado al entero mas cercano.
Math.sing(x) Devuelve el signo de la x, que indica si x es positivo, negativo o cero.

*/

/*se trabaja con estas dos propiedades*/

console.log(Math.E);
console.log(Math.PI);


let num = 5.3;

/*

let max = 10;
let min = 5;

//formula paragenerar numeros aleatorios//

console.log(Math.round(Math.random() * (max -min)+min));

*/


//devuelve el valor absoluto de (x)//
console.log(Math.abs(num));

//Devuelve el entero mas grande mayor o igual que un numero//(aproxima al numero mas grande)
console.log(Math.ceil(num));

//Devuelve el entero mas pequeño menor o igual que un numero//(aproxima al numero mas pequeño)
console.log(Math.floor(num));

//potencia (x siempre base (y) potencia//
console.log(Math.pow(5,2))

//numero pseudoramdom de 0 a (x)//
console.log(Math.round(Math.random() * 100));

//numero peudoramdom de (x) a (x)//
console.log(Math.round(Math.random() * (100 - 50) + 50));

//Devuelve segun el signo un // -1  /  0 /  1 //
console.log(Math.sign(-5)); 

//raiz cuadrada de (x)//
console.log(Math.sqrt(25));

