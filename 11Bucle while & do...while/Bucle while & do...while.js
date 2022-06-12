//Bucles//

/*
Se usan cuando queremos que un trozo de codigo se repita.
 

Existen bucles determinados e indeterminados


//DETERMINADOS//

lOS DETERMINADOS SE USAN CUANDO ESPECIFICAMOS EL NUMERO DE VECES QUE SE VA REPETIR.

- Imprimir numeros del 1 al 10


//INDETERMINADOS//


LOS INDETERMINADOS SE USAN CUANDO NO SABEMOS EL NUMERO DE VECES QUE SE VAN A REPETIR.

- Repetir el mensaje de introducir contraseña (cuando esta es incorrecta)


//La estructura de un bucle siempre es la misma


Bucle{  

    codigo a ejecutar

}

*/


/*/Bucle While (indeterminado)//

Su sintaxis se compone de una unica parte
-Condicion de salida(para no crear bucles infinitos)


while(condicion){           while= mientras 

    codigo a ejecutar

}
*/


//Bucle do with(indeterminado)//

/*

Su sintaxis se compone de dos partes 

-Codigo a ejecutar
-Condicion de salida


do{ 

    codigo a ejecutar

}while(condicion)

*/




//Ejemplos//


let pass = "hola";

/*


while (pass != "hola") {  
    
    pass= prompt("Introdusca su contraseña")
}

console.log("Fin del Bucle");
*/

//aca se mientras esto no se cumpla se muestra eso//////


//La diferencia esta en que el while no se ejecuta si no se cumple la condicion

//Y el Do while de ejecuta al menos una vez asi no se cumpla la condicion


do { 
     
    pass = prompt("Introdusca su contraseña")
    
}while(pass !="hola")

//aca se muestra eso mientra no se cumpla la condicion//////