//DOM - Crear e insertar elementos

/* 
Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = código HTML
Añadir un elemento al DOM: parent.appendChild(element)
Fragmentos de código: document.createDocumentFragment()
*/

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect')

/* const itemList = document.createElement('LI')
itemList.textContent = 'Lunes'
daysList.appendChild(itemList) */

title.innerHTML = 'DOM - <span>Crear e insertar elementos I<span>'


/* for (const day of days) {
    const itemList = document.createElement('LI')
    itemList.textContent = day
    fragment.appendChild(itemList)
} */

const fragment = document.createDocumentFragment() //creamos documento fragment

for (const day of days) {//bucle recorre los dias en este caso del array
    const selectItem = document.createElement('OPTION')//creamos el elemento html en una constante
    selectItem.setAttribute('value', day.toLowerCase())//le damos valor a la constante en este caso los dias en minusculas
    selectItem.textContent = day//añadimos contenido a la etiqueta valor / value es igual al valor de day
    fragment.appendChild(selectItem)//añadimos la info al fragmento
} 

/* daysList.appendChild(fragment) */
selectDays.appendChild(fragment)   //insertamos el fragmento en el dom