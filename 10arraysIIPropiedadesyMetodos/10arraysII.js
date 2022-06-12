/*
//Arrays//
*/

let numbers = [1, 2, 3, 4, 5, 1];

/*------------------------------------------------------------------------------*/

/*
    Arrays - Propiedad
        .length- Devuelve el numero de posiciones que contiene el array

*/

//console.log(numbers.length);


/*------------------------------------------------------------------------------*/

/*

    Arrays - Metodos
        Array.isArray(variable a evaluar) - devuelve true si la variable es un array

*/

//let number = 4;

//console.log(Array.isArray(number));
//console.log(Array.isArray(numbers));

/*------------------------------------------------------------------------------*/

/*  

        Eliminar un elemento
            .shift() - Elimina el primer elemento del array y devuelve ese elemento
            .pop() - Elimina el ultimo elemento de un array y devuelve ese elemento

*/

//console.log(numbers);

//Elimina el primer elemento

//numbers.shift();
//console.log(numbers)

//Elimina el ultimo elemento

//numbers.pop()
//console.log(numbers)


/*------------------------------------------------------------------------------*/



/*

        Añadir elementos
            .push(element1, element2,...) - Añade uno o mas elementos al final del array y devuelve la nueva longitud.
            .unshift(element1, element2,...) - Añade uno o mas elementos al comienzo del array y devuelve la longitud.

*/


//console.log(numbers);

/*push (se añade al final)*/

//let newLength = numbers.push(6);
//console.log(numbers);
//console.log(newLength);

/*unshift (se añade al inicio) */

//let newLength = numbers.push(6);
//let newLength2 = numbers.unshift(0);

//console.log(numbers);


/*------------------------------------------------------------------------------*/

/*

    .indexOF() - Devuelve el primer indice del elemento que coincida con el valor especificado, u/o -1 si nonguno es encontrado.

*/


//console.log(numbers);
//console.log(numbers.indexOf(3));
//console.log(numbers.indexOf(6));

/*------------------------------------------------------------------------------*/

/*

    .lastIndexOF() - Devuelve el ultimo indice del elemento que conincida con el valor especificado, u/o -1 si ninguno es encontrado

*/

//console.log(numbers);
//console.log(numbers.lastIndexOf(1));

/*------------------------------------------------------------------------------*/

/*

        .reverse() - invierte el orden de los elementos del array

*/

//console.log(numbers);
//numbers.reverse();
//console.log(numbers);

/*------------------------------------------------------------------------------*/


/*

        .join(`separador`) - Devuelve un string con el separador que indiquemos, por defecto son comas

*/

//console.log(numbers);

//let arrayString = numbers.join(' ')
//console.log(arrayString);
//console.log(numbers.join('-'))

/*------------------------------------------------------------------------------*/


/*  

        .splice(a,b,items) - Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
            a - Indice de inicio
            b - Numeros de elementos (opcional)
            items - Elementos a añadir en el caso de que se añadan.(opcional)

*/


console.log(numbers);

//numbers.splice(3); //- Desde la posicion (a) elimina hasta el final
//console.log(numbers)

//numbers.splice(2, 2); //- elimina desde la posicion 2 , el numero de valores que le indiquemos
//console.log(numbers)


//numbers.splice(2, 2, 10, 23, 54); //- si(b) es un valor distinto de 0 elimina el numero de valores que indiquemos en b y añade los valores de items a partir de la posicion a
//console.log(numbers)



//numbers.splice(4, 0, 10, 23, 54); //- Si b vale cero añade los elementos apartir de la posicion a y no elimina ninguno
//console.log(numbers);

/*------------------------------------------------------------------------------*/

/*  

        .slice(a,b) - Extrae elementos de un array desde el indice (a) hasta el indice (b). Si no existe b lo hace desde a hasta el final, Si no existe ni a ni b hace una copia del original

*/


//let newnumbers = numbers.slice();
//console.log(numbers);
//console.log(newnumbers);


//let newnumbers = numbers.slice(2);
//console.log(newnumbers);

//let newnumbers = numbers.slice(2,4);
//console.log(newnumbers);