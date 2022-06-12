/*

//flujo de un programa//


Se lee siempre de arriba a abajo

//para que no siempre sea asi//

//estructuras de control de flujo//

Condicionales:

-Simples(solo comprueban una cosa)
-Compuestos(comprueban una cosa y el caso contrario)
-Multiples(Controlan varios casos)

Bucles:

-Determinados
-Indeterminados

---------------------------------------------------

*/

/*variables ejemplos*/

let num1 = -5;

let num2 = -5;


/*Ejemplo1*/


/*//Condicional simple//*/
/*
if (num > 0) {

    console.log(`${num} es mayor a que 0`);
    
} 
*/


/*//Condicional compuesto//*/

/*
if (num>0) {
    
    console.log(`${num} es mayor a que 0`);
    

} else {  
    

    console.log(`${num} es menor a que 0`);

}

*/

/*//Condicional multiples//*/

/*
if (num > 0) {

    console.log(`${num} es mayor a que 0`);


} else if(num<0) {

    console.log(`${num} es menor a que 0`);

} else {  
    
    console.log(`${num} es igual a 0`);
}

*/



/*ejemplo2*/

/*
//Operadores logicos//


- && / and

- || / o 

*/

/*//variables//

let num1 = 0;

let num2 = 5;
*/

/*
if (num1 > 0 || num2 > 0) {  
    
    console.log(`${num1} y ${num2} son mayores que 0`);
}

*/


if (num1 > 0) {

    if (num2 > 0) {
        
        console.log(`${num1} y ${num2} son mayores que 0`);

    } else if(num2<0){  
        
        console.log(`${num1} es mayor a 0 y num 2 no es menor que 0`);

    } else {  
        
        console.log(`${num1} es mayor que 0 y num 2 es igual que 0`);
    }

} else if (num1 < 0) {   
    

    if (num2 > 0) {

        console.log(`${num1} no es mayor que 0 y ${num2} es mayor que 0`);

    } else if (num2 < 0) {

        console.log(`${num1} y ${num2} son menores que 0`);

    } else {

        console.log(`${num1} es menor que 0 y num 2 es igual a 0`);
    }
    
} else {  
    
    if (num2 > 0) {

        console.log(`${num1} es igual a 0, y ${num2} es mayor que 0`);

    } else if (num2 < 0) {

        console.log(`${num1} es igual a 0, y ${num2} es menor que 0`);

    } else {

        console.log(`${num1} y ${num2} son iguales a 0`);
    }
    
}

/*se pueden hacer con mas variables no solo numeros*/


let word = "hola";


if (word.length > 4) {  
    console.log(`${word} tiene mas de 4 letras`);

} else if (word.length < 4) {
    console.log(`${word} tiene menos de 4 letras`);

} else {  
    console.log(`${word} tiene 4 letras`);

}


/*-----------------------------------------------------*/


let respuesta = true;


/*forma1*/

if (respuesta == true) console.log(`respuesta tiene el valor de true`);
if (respuesta == false) console.log(`respuesta tiene el valor de false`);


/*forma2 (CORRECTA)*/

if (respuesta) console.log(`respuesta tiene valor de true`);
if (!respuesta) console.log(`respuesta tiene valor de false`);



