/*Bucles For Of / fOR IN*/


//Simplifica el bucle for tradicional sin tener que darle un numero de vueltas ni realizar un incremento

/*

Let names = ["paco", "jose","paula","maria"]


//for OF//

For(let name of names){
    console.log(name)
}
*/

//For In//

/*

for(let name in names){    
    console.log(name)
}
(generalmente se usa en objetos y no en arrays aun que tambien se pueden usar )

palabras reservadas para el bucle 

    break - rompe el bucle
    continue- salta la o las posiciones que le inidquemos y despues continua su ejecucion

*/

//Ejemplos




let names = ["paco", "jose", "paula", "maria"]

/*

for (let name of names) { 
    console.log(name);
}


for (let index in names) {    
    console.log(names[index]);
}

*/

for (let name of names) {
    if (name === "paula") { 
        continue
    }
    console.log(name);
}


for (let index in names) {
    if (names[index] === "paula") { 
        continue        
    }
    console.log(index);
}