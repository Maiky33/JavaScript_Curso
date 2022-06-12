/*

bucles Determinados

Es un ucle determinado aya que hay que especificar cuantas vueltas dura este durante su ejecucion

Su sintaxis se conpone de 3 partes


-Iniciar variable 

-Numero de vueltas

-Incremento o decremento

for(Let i=0;i<=10;i++){  

    Codigo a ejecutar

}

*/


let numbers=[56,14,23,37,41,59]


for (let i = 0; i <numbers.length; i++){   
    console.log(`i vale ${i} y el valor de esa posicion en el array es ${numbers[i]} `);
}

console.log(numbers.length)

//vueltas definidas (en la primera vuellta i vale 0 y en esta posicion numbers de i es 56)

// en la segunda vuelta i vale 1 por lo tanto numbers[i vale 14]