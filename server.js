const express = require('express');
const router = express.Router();

var app = express();

app.use(router);

router.get('/message', function (req, res){
    res.send('lista de mensajes');
});

router.post('/message',function (req,res){
    res.send('mensaje agregado');
});

/* app.use('/', function (req,res){
    res.send('Hola');
}) */

app.listen(3000);
console.log('la aplicación está escuchando en http://localhost:3000');