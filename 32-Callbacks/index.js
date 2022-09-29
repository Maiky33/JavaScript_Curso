//Un callback es una funcion que se ejecuta a traves de otra funcion
//Los callbacks no son asincronos

//EJEMPLO 1//

/*
const getUser = (id,cb) => {    // hacemos la funcion
    const user = {  //creamos objeto con un usuario
        name: 'maicol',
        id:id
    }

    if (id == 2) cb('user not exist')//preguntamos si id es == a 2 si es asi manda el error
        
    else cb(null, user) // sin id no es == a 2 se manda la funcion u callback
}

getUser(1, (err, user) => {    //hacemos la funcion que tendra el callback o cb
    
    if (err) return console.log(err); // esta hace que si ahi un error devuelva el error

    console.log(`user name is ${user.name}`); //pero si no ahi erro devuelve el user.name

})
*/

//-----------------------------------------------------------------------------//

//Ejemplo 2//

//simulando base de datos
/*
const users = [  //lo guardamos en un array por que tenemos vario objetos
    {   
        id: 1,
        name:'maicol'
    }, { 
        id: 2,
        name:'david'
    }, { 
        id: 3,
        name:'juanes'
    }
]

const emails = [  
    {   
        id: 1,
        email:'maicolbarrerag@gmail.com'
    }, { 
        id: 2,
        email:'davidpulido@gmail.com'
    }
]


//---------------------------//

const getUser = (id, cb) => {   // creamos funcion con dos parametros id y callback
    const user = users.find(User => User.id == id) //recorremos el array con el metodo find para obtener un usuario

    if (!user) cb(`not exist a user with id`) //!user es igual que poner user==undefined
    //le decimos que si user no esta definido devuelva que (not exist a user with id)
    else cb(null, user)
    //le decimos que si existe devuelva que no ahi error(null) y le psamos el usuario

}


const getEmail = (user, cb) => {  // creamos funcion con dos parametros user y callback
    const email = emails.find(Email => Email.id == user.id)//recorremos el array con el metodo find 
    if (!email) cb(`${user.name} hasn't email`)//le decimos que si email no esta definido devuelva que (hasn't email)
    else cb(null, { //pero si email existe pasamos los datos
        id: user.id,
        name: user.name,
        email: email.email
    })
}


//llamada funcion callback

     //id  //calback
getUser(3, (err, user) => { //llamamos la primera funcion getUser y recibe dos parametros el id y el callback
    if (err) return console.log(err);//le decimos que si ahi un error lo retorne 
    getEmail(user, (err, res) => { //llamamos la segunda funcion getEmail y recibe dos parametros  el user y el callback (err, res)
        if (err) return console.log(err);//le decimos que si ahi un error lo retorne
        console.log(res);
    })

})
*/


//Que es lo que pasa//

//llamamos la primera funcion y esta nos da el user, si no hay user nos devuelve ``not exist a user with id``
//al llamar a getUser esta recibe el user y un callback el cual es otra funcion que pregunta si hay algun err, que lo retorne

//llamamos la segunda funcion la cual recibe el user de get user y el calback el cual tiene dos parametros los cuales son el err y la res(respuesta)
//luego al llamarla pide el usuario y un callback que tambien genera una funcion la cual es preguntar si hay un err, si hay esta lo retorna

//imprimimos la res en un console.log()

//-------------------------------------------//

//opciones a pasar

//si es el usuario 1 este pasa por la primera funcion(getUser) bien ya que si existe y al llamar la segunda funcion(getEmail)este al pasar pasar bien por que tambien tiene email y devuelve la respuesta con el ID/USER/EMAIL

//si es el usuario 2 este pasa por la primera funcion(getUser) bien ya que si existe y al llamar la segunda funcion(getEmail)este al pasar pasar bien por que tambien tiene email y devuelve la respuesta con el ID/USER/EMAIL


//si es el usuario 3 este pasa por la primera funcion(getUser) bien ya que si esta el usuario, pero al llamar la segunda funcion(getEmail) este no la tiene, por lo tanto salta el  |||| if (!email) cb(`${user.name} hasn't email`) |||| diciendo que este usuario no tiene email

//si el numero es [0,4,5...] la primera funcion busca y recibe el user, pero al no encontrar ninguno con el id puesto, esta funcion salta al  if (!user) cb(`not exist a user with id`) diciendo que el usuario no fue encontrado


//EJEMPLO 3

/*

HACEMOS DOS FUNCIONES

//Esto se ejecuta de arriba hacia abajo//

const primero(()=> {   
    console.log("PRIMERO");
})

const segundo(()=>{ 
    console.log("SEGUNDO");
})

primero();
segundo();


//EL RESULTADO EN COSOLA VA SER //

PRIMERO
SEGUNDO

*/

/*

//Pero en caso de que el primer dato demore (simulando una api)//

const primero(()=> {   
    setTimeout(()=>{    
        console.log("PRIMERO");
    },3000)
})

const segundo(()=>{ 
    console.log("SEGUNDO");
})

primero();
segundo();

//EL RESULTADO EN COSOLA VA SER//

PRIMERO
SEGUNDO

ASI HAYAMOS LLAMADO PRIMERO LA PRIMERA FUNCION YA QUE ESTA TIENE UN RETRASO DE 3 SEGUNDO EL CODIGO SIGUE LEYENDO Y SE EJECUTA LA SEGUNDA FUNCION

*/



//Para esto son los callbacks poder ejecutar una funcion dentro de otra, le pasamos como parametro la segunda funcion a la primera//

const primero = ((segundo)=> {   
    setTimeout(()=>{    
        console.log("PRIMERO");
        segundo();
    },3000)

})

const segundo = (() => { 
    console.log("SEGUNDO");
})

primero(segundo);