
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var db = require('./db');


function listadoEstado(entrada,respuesta) {
    var usuarioId = entrada.body.usuarioId;
    var sql = "select p.nombre,p.inicio,p.fin,p.etapa from proyecto p join integrante_proyecto ip on p.id=ip.idProyecto where ip.idIntegrante=?";
    db.query(sql,usuarioId,function (error, filas) {
        if (error) {
            console.log(error);
            return;
        }
        
        var arreglo = [];
        for (var i = 0; i < filas.length; i++) {
            arreglo.push({nombre: filas[i].nombre, inicio: filas[i].inicio,fin:filas[i].fin,etapa:filas[i].etapa});
        }
        
        arreglo = JSON.stringify(arreglo);
        console.log(arreglo);
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
        respuesta.end(arreglo);

    });

}

exports.listadoEstado = listadoEstado;

