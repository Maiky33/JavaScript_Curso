/* 
Atributos
    element.getAttribute('attribute')
    element.setAttribute('attribute', value)
Clases
    element.classList.add('class','class',...)
    element.classList.remove('class','class',...)
    element.classList.contains('class')
    element.classList.replace('oldClass', newClass)
    
    element.classList.toggle('class'[,force])
atributos directos
    id
    value
*/

/*
const title = document.getElementById('title')
const name = document.getElementById('name')

console.log((title));
console.log(name);
*/

//console.log(name.getAttribute('type'))

//name.setAttribute('type', 'date')


//-------------------------------------------------------------------//

const title = document.getElementById('title')
const name = document.getElementById('name')

//-------------------------------------------------------------------//

//element.classList.add('class', 'class', ...)
/*
title.classList.add('main-title','other-title')

console.log(title);
console.log(name);
*/

//-------------------------------------------------------------------//

//element.classList.remove('class', 'class', ...)


//title.classList.remove('title')

//console.log(title);
//console.log(name);


//-------------------------------------------------------------------//

//element.classList.contains('class') (commprueba si tiene la clase especificada)

/*
if (title.classList.contains('title')) console.log('title tiene la clase title')
else console.log('title no tiene la clase title');

console.log(title);
console.log(name);
*/

//-------------------------------------------------------------------//

//element.classList.replace('oldClass', newClass)

/*
title.classList.replace('title','newtitle')


console.log(title);
console.log(name);
*/

//element.classList.toggle('class'[, force])



//atributos directos//

//id//
/*
console.log(title.id);
console.log(title.innerHTML);
console.log(title.textContent);
*/

//value//

console.log(name.value);
console.log(name.value.length);
