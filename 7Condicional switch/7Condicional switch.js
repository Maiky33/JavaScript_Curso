/*

//estructura switch//

Se utiliza para elegir un camino de varios prestablecidos. 

Tenemos 2 tipos principales:

sintaxis simple:

switch(evaluacion) {    

    case n1:
       //codigo
       break;
    case n2:
       //codigo
       break;
    default:
    //codigo

}

--------------------------------------------------------

sintaxis multiple:  

switch(evaluacion){ 

    case n1:
    case n2:
    case n3:
    case n4:
       //codigo
       break;

    case n5:
    
    case n6:
    
        //codigo

    break;    

    default:
     //codigo

}

*/

/*//sintaxis simple//*/

let num = 2;


switch (num) {   
   
    case 1: console.log("Num tiene el valor de 1");
        break;
    
    case 2: console.log("Num tiene el valor de 2");
        break;
    
    default: console.log("No vale ni 1 ni 2")
        
}

/*--------------------------------------------------------*/
/*//sintaxis multiple//*/

switch (num) {   
    
    case 1:
    case 3:
    case 5:
        console.log(`${num} es un Numero impar`);
        break;
    case 2:
    case 4:
        console.log(`${num} es un numero par`);
                        
}

/*//sintaxis multiple encadenada//

no se utiliza mucho

*/