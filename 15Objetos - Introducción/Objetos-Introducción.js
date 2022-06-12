//Objetos//

/*
Son estructuras de datos que representan propiedades, valores y acciones que puede realizar el objeto

Todos los objetos tienen propiedades o atributos y comportamientos o acciones representados por pares de clave (key) : valor (value)

//Ejemplo Propiedades//

const computer= {   
    screensize:17;
    model:'MacBook Pro'
}

//como acceder a las propiedades y acciones//

para acceder a las ropiedade y acciones del objeto se utiliza la nomenclatura del punto 

const person = {    
    name:'juan'
    age: 26,
    sons:['Laura','Diego']
}

para acceder

console.log(person.name);
console.log(person.age);
console.log(person.sons[0]);
console.log(person.sons[1]);
*/


const person = {
    name: 'juan',
    age: 26,
    sons: ['Laura', 'Diego', 'Pepe','Rosa' ,'Thomas']
}

//console.log(person.name);
//console.log(person['name']);

/*
for (const key in person) {
    console.log(key);
}


for (const key in person) {
    console.log(person[key]);
}
*/
/*
for (const son of person.sons) {  
    console.log(son);
}
*/

console.log(`hola ${person.name}. tienes ${person.age} años y tus hijosse llaman ${person.sons.join('-')}`);