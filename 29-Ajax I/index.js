///NOTAS//
/*
//Como funciona la web//
 Hacemos la peticion a traves del protocolo HTTP a un dominio
 --->se solicita al servidor cierta informacion y este devuelve lo que conocemos como la pagina web(Html,Css,video,imagenes...) estas son todas la que no usan ajax

 cuando utilizamos ajax 
 --->Estamos interceptando la respuesta para evitar que la pagina se recargue
 Se hace la peticion igual con el protocolo HTTP pero solo solicitamos ciertos datos al llegar estos datos los guardamos en un objeto de esta forma obtenemos los datos del servidor pero no recargamos la pagina por que no se estan cargando en el navegador si no en un objeto y una vez esten ahi trabajamos con el objeto de la forma que necesitemos


 Normalmente las peticiones a los servidore se hacen a traves de php 


 VAMOS A VER COMO HACER PETICIONES A TRAVES DE AJAX

 AJAX ES ASINCRONO
*/

/* Protocolo HTTP: https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto */
/* Códigos de estado de respuesta HTTP: https://developer.mozilla.org/es/docs/Web/HTTP/Status */


const button = document.getElementById('button')

button.addEventListener('click', () => {
    let xhr     //declaramo la variable xhr
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")//esto se hace en caso de que el usuraio tenga unavercion muy antigua de navegador

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users') //abrimos con metodo open que recibe dos parametros en este caso GET y la Api para hacer la peticion a la url(api)

    xhr.addEventListener('load', (data) => {  // Antes de enviar la peticion tenemos que decir  que hacer con los datos

        const dataJSON = JSON.parse(data.target.response);//data.target.response lo toma como un string por lo tanto los pasamos a objeto con la propiedad JSON.parse() de esta manera podremos recorer el objeto y su elementos
        const list = document.getElementById('list') //localizamos en la varible list / list

        for (const userInfo of dataJSON) { //Hacemos un bucle para que en cada vuelta que este de imprimimos la lita de los usuarios con su ID y su Name 
            const listItem = document.createElement('LI')//En cada vuelta se agrega un elemento LI nuevo
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`//Damos informacion al elemento LI
            list.appendChild(listItem)//Agregamos al UL el elemento listItem 
        }
    })
    xhr.send()//Envia la peticion hecha
})
