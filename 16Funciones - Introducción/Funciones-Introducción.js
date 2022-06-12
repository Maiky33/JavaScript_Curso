//FUNCIOINES//

/*

- son fracmentos de codigo que escribimos para ejecutar una tarea y no volver a escribir el mismo codifo mas de una vez
- Nos ayuda a modularizar el codigo

-Las funciones deben realizar una sola tarea

Sintaxis
anteriormente

fuction nombreFuncion(){ 

    //codigo a ejecutar
}

actualmente
const nombreFuncion = () =>{    
    //codigo a ejecutar
}

Una funcion puede recibir parametros esto es lo que va utilizar la funcion para ejecutarce

como declarar una funcion en ambos casos

//anteriormente

fuction nombreFuncion(Parametro1, parametro2){ 
    //codigo a ejecutar
}

//actualmente

const nombreFuncion = (parametro1, parametro2) =>{    
    //codigo a ejecutar
}

Las funciones pueden devolver valores (esto es lo mas usual de las funciones) el algunos casos puede que no devuelva nada 

para devolver valores


//anteriormente//

fuction nombreFuncion(parametro1, parametro2){  
    return parametro1+parametro2
}

//actualmente//

const nombreFuncion = (parametro1, parametro2) => parametro1+parametro2


*/

/*antiguo
function saludar() { 
    console.log("hola");
}
*/
/*
const saludar = () => console.log("hola");
const saludarUsuario = (user) => console.log(`hola ${user}`);


saludarUsuario('pepe')
saludarUsuario('martha')
*/

/*
const suma = (num1, num2) => {  
    if (num1 == 2) {    
        return num1 + num2

    } 
    //este codigo no se ejecuta gracias a que el if se cumple y este es 2
    console.log('esto no se va ejecutar si el if se cumple gracias al retut')
    return num1//
}

console.log(suma(2, 3));
*/


const suma = (num1, num2) => num1 + num2

let result = suma(3, 6)

console.log(result);