const express = require('express')
const app = express()

app.get('/hello', function (req, res) { 
    res.send('Hello World')
})

app.get('/goodbye', function (req, res) {
    res.send('goodbye world')
})

app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});