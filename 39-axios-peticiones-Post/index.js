//Tanto axios como fetch se pueden usar dependiendo de caso (lo que querramos hacer)//


const button = document.getElementById('button')

//FETCH

//res = response = respuesta
/* button.addEventListener('click', () => {
    const newPost = {
        title: 'A new post',
        body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        userId: 1
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
}) */




//Axios// en el caso de hacer inserciones post a una api que este esperando el un json se recomienda usar axios en lugar de fetch,

button.addEventListener('click', () => { 
    axios({ 
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {  
            title: 'A new post',
            body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            userId: 1
        }
    })
    .then(res => console.log(res.data))
    .catch(err=>console.log(err))
    
})