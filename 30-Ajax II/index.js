const form = document.getElementById('form')
const characters = document.getElementById('characters')
const table = document.getElementById('table')

form.addEventListener('submit', (e) => {  //Evento para llamar la funcion (enviar formulario) y asi obtener el id
    e.preventDefault()//evita que se recargue la pag o submit(el evento) haga su funcion natural

    getData(characters.children[characters.selectedIndex].value)//al enviar la informacion le decimos que getData va a coger todos los nodos hijos del selec y de ese va selececionar alguno de ellos y va entregar el value y co este value es el que se va eje cutar la funcion
})

const getData = (id) => {   // funcion
    let xhr
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")   //navegadores antiguos

    if (id == undefined) { // Si id no esta definida hace //
        xhr.open('GET', 'marvel.php') //Llamamos la base de datos / o abrimos la conexcion

        xhr.addEventListener('load', (data) => { //esperamos hacer con la data
            const dataJSON = JSON.parse(data.target.response) //creamos constante para guardar la data y convertirlo a .JSON

            console.log(dataJSON)

            const fragment = document.createDocumentFragment()//creamos documento fragment parar agregar los heroes

            for (const heroes of dataJSON) {// un bucle ford para que en cada vuelta este agrege los heroes en un option
                const option = document.createElement('OPTION')//Creamos los elementos option a cada vuelta
                option.setAttribute('value', heroes.ID)//le agregamos el atributo value a cada option para asi obtener el id
                option.textContent = heroes.Name//le damos contenido a los option en este caso el Name (nombre)
                fragment.appendChild(option)//  Agregamos el fragmento al option para tenerlos todos en una sola variable
            }

            characters.appendChild(fragment)//Por ultimo a characters le agregamos el fragmento (que es todo lo anterior)
        })

    } else {    //Si el Id Esta definido//

        xhr.open('GET', `marvel.php?id=${id}`)  //Llamamos la base de datos o abrimos la conexcion

        xhr.addEventListener('load', (data) => { //Esperamos que hacer con la data
            const dataJSON = JSON.parse(data.target.response) //creamos constante para guardar la data y convertirlo a .JSON
            console.log(dataJSON)

            const fragment = document.createDocumentFragment()//cremos documento fragment para agregar la info de los heroes en la tabla

            for (const heroe of dataJSON) {//creamos bucle para que en cada vuelta tengamos los datos de cada heroe

                //Localizamos objetos
                const row = document.createElement('TR')//Localizamos el TR
                const dataName = document.createElement('TD')//localizamos el dataName
                const dataAlignment = document.createElement('TD')//localizamos el dataAlignment
                const dataHometown = document.createElement('TD')//localizamos el dataHometown
                const dataGender = document.createElement('TD')//localizamos el dataGender
                const dataFighting = document.createElement('TD')//localizamos el dataFighting


                //Le damos Contenido a las variables antes localizadas

                dataName.textContent = heroe.Name //le damos contenido a dataName con el for heroe.name
                dataAlignment.textContent = heroe.Alignment//le damos contenido a dataAlignment con el for heroe.Alignment
                dataHometown.textContent = heroe.Hometown//le damos contenido a dataHometown con el for heroe.Hometown
                dataGender.textContent = heroe.Gender//le damos contenido a dataGender con el for heroe.Gender
                dataFighting.textContent = heroe.Fighting_Skills//le damos contenido a dataFighting con el for heroe.Fighting_Skills

                //agragamos el contenido altes dado a la constante row

                row.append(dataName) //agragamos el dataName al row
                row.append(dataAlignment) //agragamos el dataAlignment al row
                row.append(dataHometown) //agragamos el dataHometown al row
                row.append(dataGender) //agragamos el dataGender al row
                row.append(dataFighting) //agragamos el dataFighting al row

                fragment.append(row)//Por ultimo al fragmento le agregamos la constante row la cual trae la informacion anterior
            }


            //Preguntamos si table.children[1] esta
            if (table.children[1]) {//Si esta 
                table.removeChild(table.children[1])//Removemos este elemento
            }
            table.append(fragment)//y si no esta el codigo sigue curso agregando a la tabla la informacion de los heroes la cual estaba en el fragment, 
            
            //(esto para que asi al exigir los datos de nuevo los anteriores se eliminen y se pongan los nuevos)//
        })
    }

    xhr.send()//enviamos 
}

getData()