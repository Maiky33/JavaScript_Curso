/*
    //Fetch API//

    Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, como peticiones y respuestas.
    También provee un método global fetch() que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.

    Está basado en promesas, por lo cual tiene un response y un reject internos
        Response tiene varios métodos
        array​Buffer(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando se necesita manipular el contenido del archivo.
        blob(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando no se necesita manipular el contenido y se va a trabajar con el archivo directamente
        clone(): crea un clon de un objeto de respuesta, idéntico en todos los sentidos, pero almacenado en una variable diferente.
        form​Data(): Se utiliza para leer los objetos formData
        json(): Convierte los archivos json en un objeto de JavaScript
        text(): Se utiliza cuando queremos leer un archivo de texto. Siempre se codifica en UTF-8

        //Comprobación de soporte FETCH
            if (window.fetch != undefined) console.log('FETCH OK')
            else console.log('FETCH NOT WORKS!')
*/



const button = document.getElementById('button')

//res = response = respuesta == es todo lo mismo
// res.ok ? esto es igual a res.ok == true

button.addEventListener('click', () => {  //Funcioion click
    fetch('https://jsonplaceholder.typicode.com/users') //llamamos metodo fetch y le pasamos la api = url
        
        .then(res => res.ok ? Promise.resolve(res) : promise.reject(res)) //Esta linea comprueba si la url o api llego correctamente como fetch trabaja con promesas se pone .then para las resolve y el reject  

        .then(res => res.json())//Con esta linea convertimos los datos a un .json para que javaScript pueda leerlos
        
        .then(res => {  //por ultimo creamos un fragmento para poder imprimir toda la informacion de golpe en el html

            //Este es el fragmento
            const list = document.getElementById('list')
            const fragment = document.createDocumentFragment()
            for (const userInfo of res) {
                const listItem = document.createElement('LI')
                listItem.textContent = `${userInfo.id} - ${userInfo.name}`
                fragment.appendChild(listItem)
                list.appendChild(listItem)
            }
            list.appendChild(fragment)
        })
          
})













// Metodo anterior Ya no se usa
/*
button.addEventListener('click', () => {
    let xhr
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
    xhr.addEventListener('load', (data) => {
        const dataJSON = JSON.parse(data.target.response)
        const list = document.getElementById('list')
        for (const userInfo of dataJSON) {
            const listItem = document.createElement('LI')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            list.appendChild(listItem)
        }
    })
    xhr.send()
}) */