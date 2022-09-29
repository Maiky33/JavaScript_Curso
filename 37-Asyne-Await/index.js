/* //   ASYNC  /   AWAIT     //
const getName = async () => { //si usamos el async en una funcion automaticamente esta devuelve una promesa
    return new Promise((resolve, reject) => {
        setTimeout(() => {    
            resolve('maicol')
        },1500)
    })
}


const sayhello = async() => {   
    const name = await getName()
    return `hello ${name}`
}

sayhello().then(saludo=>console.log(saludo))
*/

const users = [{ id: 1, name: 'Dorian' }, { id: 2, name: 'Laura' }, { id: 3, name: 'Carlos' }]
const emails = [{ id: 1, email: 'dorian@gmail.com' }, { id: 2, email: 'laura@gmail.com' }]

const getUser = async (id) => {
    const user = users.find(user => user.id == id)

    if (!user) throw new Error(`Doesn't exist an user with id ${id}`)   //en vez de reject, usamos throw new Error para devolver el error en caso de que alla con async

    else return user    //en vez de resolve, solo devolvemos el user con return
}


const getEmail = async (user) => {
    const email = emails.find(email => email.id == user.id)
    if (!email) throw new Error(`${user.name} hasn't email`)
    else return ({
        id: user.id,
        name: user.name,
        email: email.email
    })
    
}

getInfo = async (id) => { 

    try {//en caso de errores con async /Await los manejamos con un bloque try
        //como funcion = try intenta hacer lo siguiente , y si no resulta lo manda al catch
        //captura el error y lo imprime
        const user = await getUser(id)
        const res = await getEmail(user)
        return `${user.name} email is ${res.email}`
    } catch (error) {  
        console.log(error);
    }

}
//ENTENDER

//Con esta funcion lo que hasemos es una funcion async,en la cual abrimos un bloque try para captar el error de forma correcta //  Guardamos en constantes las resupestas que esperamos(user,email)// y con await le decimos que espere a que las anteriores funciones lleguen// Si no llega algo de esta funciones , pasa a error con el catch y lo imprime en un cosole.

getInfo(3).then(info=>console.log(info))