//Una promesa es un objeto con 2 callbacks internos
const users = [{ id: 1, name: 'Dorian' }, { id: 2, name: 'Laura' }, { id: 3, name: 'Carlos' }]
const emails = [{ id: 1, email: 'dorian@gmail.com' }, { id: 2, email: 'laura@gmail.com' }]

//Al usar promesas tenemos que modificar el codigo

const getUser = (id) => {// quitamos los callbacks y solo pasar un parametro
    const user = users.find(user => user.id == id)
    return promise = new Promise((resolve, reject) => { //creamos la promesa y esta resive dos parametros el resolve y el reject 
        if (!user) reject(`Doesn't exist an user with id ${id}`)// si user no existe(no esta definido) reject devuelve (`Doesn't exist an user with id ${id}`))
        else resolve(user)// si esta definido resolve devuelve user
    })
}


const getEmail = (user) => {// quitamos los callbacks y solo pasar un parametro
    const email = emails.find(email => email.id == user.id)
    return promise = new Promise((resolve, reject) => {//creamos la promesa y esta resive dos parametros el resolve y el reject 
        if (!email) reject(`${user.name} hasn't email`)// si email no esta definido, reject devuelve (`${user.name} hasn't email`)
        else resolve({  //pero si email esta definido resolve pasa el siguiente objeto 
            id: user.id,
            name: user.name,
            email: email.email
        })
    })
}

getUser(2)  //Llamamos la primera funcion la cual tiene la promesa que determina si ahi un user
    .then(user => getEmail(user)) //la propiedad then recibe unos datos y le decimos que hacer con esso datos 
    .then(res => console.log(res))//aqui otro then recibe el res(resultado)y lo imprimimos
    .catch(err => console.log(err))//en las promesas no tratamos el error con un then si no con un catch este maneja todos los errores los de las dos promesas

/*
getUser(2)
    .then(getEmail)
    .then(console.log)
    .catch(console.log)
    */