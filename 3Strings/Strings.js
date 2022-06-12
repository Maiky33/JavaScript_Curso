/*Strings*/


let cadena = "Hola Mundo";

//PROPIEDADES


//-----------------------------------------------------------------------------------//
//length -> Devuelve la longitud de la cadena

//console.log(cadena.length);

//-----------------------------------------------------------------------------------//


/*Metodos

Todos los metodos devuelven una cadena nueva, la cadena original no sera modificada.

toUpperCase() -> Devuelve la cadena a mayusculas

*/


//console.log(cadena.toUpperCase());

//let cadenamayus = cadena.toUpperCase();
//console.log(cadenamayus);

//-----------------------------------------------------------------------------------//



/*

toLowerCase() -> Devuelve la cadena a minusculas

*/

//console.log(cadena.toLowerCase());


//-----------------------------------------------------------------------------------//


/*//IndexOf(string) -> Devuelve la posicion en la que se encuentra el string, si no lo encuentra devuelve -1 */



//console.log(cadena.indexOf('Hola'));


/*--------------------------------------------------*/

/*replace(valor a buscar, valor nuevo) -> Remplaza el fragmento de la cadena que le digamos y pone el valor nuevo */


//console.log(cadena.replace("Mundo","Pirobohpta"));


/*--------------------------------------------------*/

/*substring(inicio [,fin]) -> Extrae los caracteres desde inicio hasta fin (el final no se incluye)


Si no se incluye el fin extrae hasta el final.*/


//console.log(cadena.substring(3));

//console.log(cadena.substring(1, 7));



/*--------------------------------------------------*/


/*Slice(inicio [,fin ])  -> igual que substring pero admite valores negativos, si ponemos valores negativos empezara desde atras

Si no se incluye el final extrae hasta el final

(2,-4) -> Empieza a contar en el tercer caracter y los 4 ultimos no los considera*/




//console.log(cadena.slice(-5));
//console.log(cadena.slice(2));
//console.log(cadena.slice(0, -6));



/*--------------------------------------------------*/


/*trim()-> Elimina los espacios al inicio y al final de la cadena*/


//let cadena2 = "   hola youtube estamos trabajando con cadenas  ";
//console.log(cadena2.trim());



/*--------------------------------------------------*/


/*
--ES6--*/

/*--------------------------------------------------*/


/*

StartsWith(valor [,inicio]) -> Sirve para saber si la cadena empieza con ese valor. Devuelve true o false*/



//console.log(cadena.startsWith("H"));
//console.log(cadena.startsWith("h"));
//console.log(cadena.startsWith("M" , 5));



/*--------------------------------------------------*/


/*endswith(valor[,longitud]) -> Sirve para saber si la cadena termina con ese valor. Devuelve true o false*/



//console.log(cadena.endsWith("o"));

//console.log(cadena.endsWith("a", 4));

//console.log(cadena.endsWith("n", 8));

//console.log(cadena.endsWith("Mundo"));



/*--------------------------------------------------*/


/*includes(valor[,inicio]) ->Igual que IndexOf pero devuelve truee o false*/


//console.log(cadena.includes("n"));

//console.log(cadena.includes("a", 5));

//console.log(cadena.includes("a", 3));



/*--------------------------------------------------*/


/*repeat(valor) -> Repite el string el numero de veces que le indiquemos.*/



//let cadena3 = "Hola";

//console.log(cadena3.repeat(3));

//console.log('ta'.repeat(7));



/*--------------------------------------------------*/



/*Template Strings*/


let nombre = "Maicol";
let apellido = "barrera";
let edad = 18;



console.log("Hola " + nombre + " " + apellido + ". tienes " + (edad+1) + " años.");


//forMa correcta//

console.log(`Hola ${nombre} ${apellido}. tienes ${edad} años.`);
console.log(`Hola ${nombre} ${apellido}. El año que viene tendras ${edad+ 1} años.`);
