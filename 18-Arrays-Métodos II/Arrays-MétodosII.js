/*
.from(interable) - Convierte en array el elemento iterable(es todo aquel que se puede recorrer)

let word = 'Hola mundo'
console.log(Array.from(word));
console.log(word.split(''));

*/
//-------------------------------------------------------------------------//
/*
.sort([callback]) - Ordena los elementos de un array alfabeticamente(valor Unicode), si le pasamos un callback los ordena en funcion dek algoritmo que le pasemos.


const letters = ['b', 'c', 'z', 'a']
const numbers = [1,8,100,300,3]

console.log(letters.sort());

console.log(numbers.sort());
console.log(numbers.sort((a,b)=>a-b));

para entender mas la funcion

function menorMayor(a,b){   
    if( a - b < 0) return -1;
    if( a - b > 0) return 1;
    if( a == b) return 0;
}

function mayorMenor(a,b){   
    if( b - a < 0) return -1;
    if( b - a > 0) return 1;
    if( b == a) return 0;
}

*/
//-------------------------------------------------------------------------//

/*
.forEach(callbak(currentValue,[index])) - ejecuta la funcion indicada una vez por cada elemento del array.

const numbers = [12, 25, 47, 84, 97]

numbers.forEach((number) => console.log(number))

numbers.forEach((number, index) => console.log(`${number} esta en la posicion ${index}`))

*/

//-------------------------------------------------------------------------//

/*
.some(callback) - Comprueba si al menos un elemento del array cumple la condicion
*/
/*
.every(callback) - Comprueba si todos los elementos del array cumple la condicion

const words = ['Html', 'Css', 'JavaScript', 'PHP']

//.some//
console.log(words.some(word => word.length > 10));

//.every//
console.log(words.every(word => word.length > 3));
*/

//-------------------------------------------------------------------------//

/*
.map(callback) - Transforma todos los elementos de array y devuelve un nuevo array

const numbers = [12, 25, 47, 84, 97]

const numbers2 = numbers.map((number) => (number * 2))
console.log(numbers2);

*/

//-------------------------------------------------------------------------//

/*
.filter(callback) - Filtra todos los elementos del array que cumplan la condicion y devuelve un nuevo array

const numbers = [12, 25, 47, 84, 97]

const numbers2 = numbers.filter((number) => number > 40)
console.log(numbers2);

*/
//-------------------------------------------------------------------------//



//reduce(callback) = Reduce todos los elementos del array a un unico valor

//EJEMPLO 1
/*
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.reduce((a, b) => a + b));
*/



//EJEMPLO2


const users = [
    {   
        name: 'user 1',
        online: true 
    },
    {
        name: 'user 2',
        online: true
    },
    {
        name: 'user 3',
        online: false
    },
    {
        name: 'user 4',
        online: true
    },
    {
        name: 'user 5',
        online: false
    },
    {
        name: 'user 6',
        online: true
    }
]


const usersOnline = users.reduce((cont, user) => {
    if (user.online) cont++
    return cont
},0)

console.log((`hay ${usersOnline} usuaros conectados`));