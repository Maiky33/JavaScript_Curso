/*
    Las peticiones Post sirven para enviar datos y hacer inserciones en una api u base de datos


    Fetch API
        Para hacer peticiones POST, fetch admite un segundo parámetro.  (Un objeto)
        fetch(url, {
        method: 'POST',
        body: Los datos que enviamos. Si es un objeto hay que convertirlo con JSON.stringify(datos),
        headers: {
            cabeceras de información sobre lo que estamos enviando
            https://developer.mozilla.org/es/docs/Web/HTTP/Headers
        }
    })
   
        // para enviar los datos tenemos que convertirlos para poder hacerlo
     console.log(newPost)
     console.log(JSON.stringify(newPost))
*/

const button = document.getElementById('button')

button.addEventListener('click', () => {
    const newPost = {   
        title: 'A new post',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        userId:1
    }


    //fetch metodo post

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {   
            "Content-type": "application/json"
        }
    })
        .then(res => res.json()) //se convierte para que la respuesta que nos llegue se pueda interpretar
        .then(data => console.log(data))//imprimimos las respuesta

    

})

