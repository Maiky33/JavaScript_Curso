//Axios es una libreria basada en promeasas para el cliente o para el servidor
//En que caso podemos utilizar esta libreria en ves de fetch u HTTPrequest
//Para Axios el mejor momento para usarla es para traer datos de alguna api res ya que pesa muy poco y esta muy bien optimizada


//Fetch
const button = document.getElementById('button')

//res = response = respuesta
/*
button.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            const list = document.getElementById('list')
            const fragment = document.createDocumentFragment()
            for (const userInfo of res) {
                const listItem = document.createElement('LI')
                listItem.textContent = `${userInfo.id} - ${userInfo.name}`
                fragment.appendChild(listItem)
            }
            list.appendChild(fragment)
        })
}) 
*/

//Axios


button.addEventListener('click', () => {    
    axios({ 
        method: 'GET',
        url:'https://jsonplaceholder.typicode.com/users'
    }).then(res => { 
        const list = document.getElementById('list')
        const fragment = document.createDocumentFragment()
        for (const userInfo of res.data) {      //La diferensia es que no recorremos todo el objeto(res) si no que recorremos res.data
            const listItem = document.createElement('LI')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            fragment.appendChild(listItem)
        }
        list.appendChild(fragment)

    }).catch(err=>console.log(err))
})
