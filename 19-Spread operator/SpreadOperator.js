//Spread operator (Operador de expansion)

//Su sintaxis es (...)

//const numbers = [-12, 2, 3, 23, 43, 2, 3]
//console.log(...numbers);


//Enviar elementos en un array a una funcion

/*
const addnumbers = (a, b, c) => { 
    console.log(a+b+c);
}
let numbersToAdd = [1, 2, 3]

addnumbers(...numbersToAdd)
*/


//Añadir un array a otro array

/*
let users = ['javier', 'david', 'rosa', 'juan', 'mercedes']
let newUsers = ['martha', 'jaime', 'laura']

users.push(...newUsers)
console.log(users);
*/


//Copiar arrays

/*
let arr1 = [1, 2, 3, 4]
let arr2 = [arr1]

console.log(...arr2);
*/

//Concatenar arrays
/*
let arr1 = [1, 2, 3, 4]
let arr2 = [6,7,8]

//ejemplo1
//let arrConcat = arr1.concat(arr2)

//ejemplo2
let arrConcat = [...arr1,...arr2]
console.log(arrConcat);
*/

//Enviar un numero indefinido de arguentos a una funcion (parametros REST)
/*
const restParms = (...numbers) => { 
    console.log(numbers);
}

restParms(1, 2, 3, 4, 5, 6, 7, 8, 9)
*/

//libreria math


const numbers = [-12, 2, 3, 23, 43, 2, 3]

console.log(Math.max(...numbers));//saca maximo
console.log(Math.min(...numbers));//saca minimo


//Eliminar elementos duplicados

console.log(new Set(numbers));//saca en un objeto Set sin duplicados
console.log([...new Set(numbers)]);//saca en  un array sin duplicados

