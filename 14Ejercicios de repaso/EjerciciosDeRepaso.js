

//1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años" Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings



/*

(Se puede convertir la variable edad a numero con la funcion parseint)
let nombre = prompt("Introduzca su nombre");
let edad = prompt("introduzca su edad");


console.log(`Hola ${nombre}, tienes ${edad} y el año que viene tendras ${++edad}`);
*/


//2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo.En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.triángulo = b * h / 2 rectángulo = b * h círculo = π * r2(pi * radio al cuadrado)


/*
const figura = document.getElementById("numbers");
const result = document.getElementById("result");
//const pi = 3.14;

let figuras = prompt('De qué figura se quiere calcular el área (triangulo,rectangulo,circulo)');


if (figuras === 'triangulo') {
    let b = prompt('Ingrese la base'); 
    let h = prompt('Ingrese la altura');
    result.textContent = `El area del triangulo es ${b * h / 2}m²`;

} else if (figuras === 'rectangulo') {
    let b = prompt('Ingrese la base');
    let h = prompt('Ingrese la altura');
    result.textContent = `El area del rectangulo es ${b * h}m²`;
    
} else if (figuras === 'circulo') {
    let r = prompt('Ingrese el radio');
    result.textContent = `El area del circulo es ${Math.PI * Math.pow(r, 2)}`;
    
} else {  
    alert('Lo que ingreso no es una figura valida');
}

*/




//3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar" si el número es 5 el resultado será: 1 - es impar 2 - es par 3 - es impar 4 - es par 5 - es impar


/*
let num = prompt('Introduzca un numero');

//(le estoy diciendo que el bucle inicie en 1 y termine en (num)variable y que cada vuelta i aumenta 1 )
for (let i = 1; i <= num; i++) {

    if (i % 2 == 0) {
        console.log(`${i} - es Par`);
    } else {
        console.log(`${i} - es Impar`);
    }
}
*/


//4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.Un número primo es aquel que solo es divisible por sí mismo y la unidad


/*
let num = parseInt(prompt('Introduce un numero'));
let divisores = 0;


if (num === 1) { 
    console.log('El numero 1 no es valido');
} else{
 
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            console.log(`${num} No es primo`);
            divisores++
            break

        }

    }
    
}

if (divisores == 0) {   
    console.log(`${num} Es primo`);
}
*/

//5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

//!5 = 5 * 4 * 3 * 2 * 1 = 120

/*
let num = parseInt(prompt('Introduce un numero'));
let result = 1;

for (let i = num; i > 0; i--){ 
    result *= i
    //result vale 1 en la primera vuelta multiplica por i(5*1)en primera vuelta, en la siguiente vuelta i(4) y se va guardando el numero 5*1 5 // 5*4 = 20 // 20*3 = 60 // 60*2 = 120
}

console.log(`el factorial de ${num} es ${result}`);
*/
 



//6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido

/*
let suma = 0;
let cont = 0;

while (suma <= 50) {    
    suma += parseInt(prompt('Introduce un numero para añadir a la suma'))
    cont++
}
console.log(`la suma total es de: ${suma}`);
console.log(`El total de numeros introducidos es ${cont}`);*/



/*
let num = parseInt(prompt('introduzca los numeros'));
let result = num;
let j = 1;

for (let i = num; i > 0; i){
    num = parseInt(prompt('introduzca los numeros'));
    result += num
    j++
    if (result > 50) {
        console.log(`el numero ${result} es mayor a 50`);    
        console.log(`Se han intrucido ${j} numeros`);
    } else if (result < 50) {
        console.log(`la suma de los numeros es ${result}`);
        console.log(`Se han intrucido ${j} numeros`);
    } 
}
*/


//7 - Crea 3 arrays.El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos.Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares.Muestra por consola: -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6 - el array de pares e impares

/*
const numbers = [3, 43, 21, 20, 56]
let pares = []
let impares = []


for (const number of numbers) {  

    let ramdom = Math.round(Math.random() * 10 + 1)
    const result = number * ramdom

    console.log(`${number} x ${ramdom} = ${result}`)
    if (result % 2 == 0) {   
        pares.push(result)
    } else {  
        impares.push(result)
    }

}

console.log(pares);
console.log(impares);
*/


//8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde.El número no puede ser negativo ni tener más de 8 dígitos.La posición de la letra es el resultado del módulo del número introducido entre 23

//const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


/*
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

const dni = prompt('Introduce tu DNI')

if (dni.length == 8 && parseInt(dni) > 0) { 
    console.log(`tu DNI completo es ${dni}${letras[dni%23]}`);
} else {  
    alert('La informacion no es correcta')
}
*/


//9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.

/*
const palabra = prompt('Introduce una palabra').toLocaleLowerCase()

let consonantes = 0;
let vocales = 0;

//Con OF pido que me de cada letra de la palabra en cada vuelta
for (const letra of palabra) {    
    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {  
        vocales++
    } else {  
        consonantes++
    }
}

console.log(`${palabra} tiene ${vocales} vocales y ${consonantes} consonantes y su longitud es de ${palabra.length}`);
*/



//10 - Dado un array que contiene["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no


const palabra = prompt('Introduzca un color').toLocaleLowerCase()
const colores = ["azul","amarillo","rojo","verde","rosa"]

//para buscar en un array ay muchas maneras (indexof) esta funcion es una de ellas//

if (colores.indexOf(palabra) !== -1) {    
    console.log(`${palabra} si esta en el array ( ${colores} )`)
} else alert('No se encuentra en el array')


/*
for (color of colores) {  

    if (palabra == 'azul' || palabra == 'amarillo' || palabra == 'rojo' || palabra == 'verde' || palabra == 'rosa'){
        console.log(`${palabra} si esta en el array ( ${colores} )`)
    } else alert('No se encuentra en el array')
}
*/