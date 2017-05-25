var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var db = require('./db');

function listadoActividadesIntegrante(entrada, respuesta) {
    var sql = 'select act.nombre,act.descripcion,act.inicio,act.fin from actividad act join integrante_proyecto ip on act.idIntegrante=ip.id where ip.idIntegrante=?';
    db.query(sql, entrada.body.usuarioId, function (error, filas) {
        if (error) {
            console.log('error en el listado');
            return;
        }
        var arreglo = [];
        //Se recorren los registros obtenidos        
        for (var f = 0; f < filas.length; f++) {
            arreglo.push({nombre: filas[f].nombre, descripcion: filas[f].descripcion, inicio: filas[f].inicio, fin: filas[f].fin});
        }
        arreglo = JSON.stringify(arreglo);


        respuesta.writeHead(200, {'Content-Type': 'application/json'});

        respuesta.end(arreglo);

    });
}


function listarTareaActividad(entrada, respuesta) {
    var sql = "select t.nombre,t.porcentaje, t.estado, t.inicio,t.fin from tareas t";
    //var sql = "select a.nombre,t.nombre,t.porcentaje, t.estado, t.inicio,t.fin from tareas t join registro r on r.id=t.usuarioId join actividad a on r.id=a.usuarioId where t.usuarioId=? ";
    db.query(sql, entrada.body.usuarioId, function (error, filas) {
        if (error) {
            console.log(error);
            return;
        }

        var arreglo = [];
        for (var i = 0; i < filas.length; i++) {
            arreglo.push({nombre: filas[i].nombre,porcentaje: filas[i].porcentaje, estado: filas[i].estado, inicio: filas[i].inicio, fin: filas[i].fin});
        }        
        arreglo = JSON.stringify(arreglo);
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
        respuesta.end(arreglo);

    });

}

function buscarProyecto(entrada, respuesta) {

    var nombreBuscar = [entrada.body.nombreBuscar];
    console.log(nombreBuscar);
    //Se manda el codigo en la busqueda

    var sql = 'select nombre,inicio,fin,etapa from proyecto where nombre=? AND usuarioId=?';

    db.query(sql, [nombreBuscar, entrada.body.usuarioId], function (error, filas) {
        if (error) {
            console.log(error);
            return;

        }
        if (filas.length > 0) {
            var object = {codigo: 1, nombre: filas[0].nombre, inicio: filas[0].inicio, fin: filas[0].fin, etapa: filas[0].etapa};
            object = JSON.stringify(object);
            respuesta.writeHead(200, {'Content-Type': 'application/json'});
            respuesta.end(object);
        } else {
            var object = {codigo: -1};
            object = JSON.stringify(object);
            respuesta.writeHead(200, {'Content-Type': 'application/json'});
            respuesta.end(object);
        }



    });

}

function eliminarProyecto(pedido, respuesta) {

    var nombre = pedido.body.nombreBuscar;
    var sql = 'delete from proyecto where nombre=? AND usuarioId=?';
    var codigo = 1;
    db.query(sql, [nombre, pedido.body.usuarioId], function (error, response) {
        if (error) {
            codigo = -1;
        }
        var object = {codigo: codigo};
        object = JSON.stringify(object);
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
        respuesta.end(object);
    });

}


exports.listarTareaActividad = listarTareaActividad;
exports.listadoActividadesIntegrante = listadoActividadesIntegrante;
exports.buscarProyecto = buscarProyecto;
exports.eliminarProyecto = eliminarProyecto;