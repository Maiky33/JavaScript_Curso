/*

//Operador Ternario//

Se utiliza cuando una condicion sera true o false, al igual que el if

Su ejecucion puede tener una o varias sentencias, en este caso iran sepradas por comas y entre parentesis

//Sintaxis//

(condicion) ? true : false

(condicion) ? 

    (primera sentencia,
    segunada sentencia)

    :
    (primera sentencia,
    segunda sentencia)

*/

/*Forma correcta(para saber si un numero es par o impar*/

let num = 3;

/*
(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);*/

/*tambien se puede hacer con un if (pero es mas codigo)*/

/*

if (num % 2 == 0) {
    console.log(`${num} es par`)
} else
    console.log(`${num} es impar`);
*/


/*En caso de varias sentencias*/
    

(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);

(num % 2 == 0) ? 
    (
        console.log(`${num} es par`),
        console.log(`${num} es par 2`)
    
    )
     
     :
    
    (
        console.log(`${num} es impar`),
        console.log(`${num} es impar 2`)

    ) 
        








