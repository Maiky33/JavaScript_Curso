
// document.getElementById('id') - Acceder a un elemento a través de su id

/*
const title = document.getElementById('title')
console.log(title);

title.textContent = 'Dom - Accediendo a nodos'
*/


//- document | element .querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS

/*
const paragraph = document.querySelector('.paragraph:nth-child(2)')

const span = document.getElementById('title').querySelector('span')

console.log(span.textContent);
*/

//- document | element .querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList


const paragraphs = document.querySelectorAll('.paragraph')

//const paragraphsSpread = [...document.querySelectorAll('.paragraph')]
const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'))


//paragraphs[1].style.color = 'red'
//paragraphs.map(p => p.style.color = 'green')

paragraphsArray.map(p => p.style.color = 'blue')





