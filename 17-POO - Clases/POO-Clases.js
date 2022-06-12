//POO Porgramacion Orientada a Objetos//

//- Es un paradicma de la programacion que actualiza la forma de programar AuthenticatorAssertionResponse.

/*
conseptos fundamentales de POO son;

-Clases 
-Herencia
-Objeto 
-Metodos
-Evento
-ETC

//clases//

son plantilla que se utilizan para crear objetos iguales

Cuando creamos un objeto, a esa accion se denomina Instanciar un objeto

Necesitamos una funcion constructora. Se tiene que llamas constructor y se ejecuta cada vez que creemos un objeto

class Persona{

    consturtor(nombre, apellido, edad){ 
    
        this.nombre = nombre
        this.apellido= apellido
        this.edad = edad

    }
}

se puede asignar propiedades que no haya en los parametro, pero siempre utilizando this para referenciar el objeto

this.datos = `${nombre } ${apellido} ${edad}` 

//
Los objetos pueden tener funciones asociadas a el. En ese caso se les denomina METODOS

saludar(){  
    return 1hola, me llamo ${this.nomre} y tengo ${this.edad} años`;
}


//CREAR OBJETOS//

Para crear objetos utilizando la clase o plantilla se hace con la palabra reservada new y el nombre de la calse que queremos utilizar

const juan = new persona ('Juan', 'Garcia', 23)

Una vez que esta instanciado el objeto podremos acceder a sus propiedades y metodos utilizando la nomenclatura del punto o buscando su propiedad en el objeto

juan.nombre                 juan['nombre']
juan.apellido               juan['apellido']
juan.edad                   juan['edad']
juan.datos                  juan['datos']
juan.saludar()              juan['saludar']()


*/

//clase
class Persona{

    //contructor
    constructor(nombre, apellido, edad) { 

        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

        this.datos = `me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años `

    }

    //metodos
    saludar() {  
        return `Hola me llamo ${this.nombre} y tengo ${this.edad} años`
    }
} 

//una clase se puede usar para varios objetos 
const juan = new Persona('juan', 'garcia', 25)
const martha = new Persona('martha', 'garcia', 35)

console.log(juan)
console.log(juan.saludar())
console.log(martha.saludar())



