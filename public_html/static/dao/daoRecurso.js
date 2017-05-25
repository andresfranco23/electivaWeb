
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var db = require('./db');


function listarRecurso(entrada,respuesta) {
    var sql = "select nombre,cantidad,descripcion, ubicacion from recurso where usuarioId=? ";
    db.query(sql,entrada.body.usuarioId,function (error, filas) {
        if (error) {
            console.log(error);
            return;
        }        
        var arreglo = [];
        for (var i = 0; i < filas.length; i++) {
            arreglo.push({nombre: filas[i].nombre, cantidad: filas[i].cantidad,descripcion:filas[i].descripcion,ubicacion:filas[i].ubicacion});
        }
        arreglo = JSON.stringify(arreglo);
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
        respuesta.end(arreglo);

    });

}

function listarForaneaTarea(entrada,respuesta) {
    var sql = "select nombre from tareas where usuarioId=? ";
    db.query(sql,entrada.body.usuarioId,function (error, filas) {
        if (error) {
            console.log(error);
            return;
        }        
        var arreglo = [];
        for (var i = 0; i < filas.length; i++) {
             arreglo.push({nombre:filas[i].nombre});
        }
        arreglo = JSON.stringify(arreglo);
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
        respuesta.end(arreglo);

    });

}

function eliminarRecurso(pedido,respuesta){
        var nombre = pedido.body.nombre;
        var sql = 'delete from recurso where nombre=?';
        var codigo = 1;
        db.query(sql, nombre, function (error,response) {
           if(error){
               codigo=-1;
           }
         
           var object = {codigo:codigo};
            object = JSON.stringify(object);
            respuesta.writeHead(200,{'Content-Type':'application/json'});
            respuesta.end(object);      
        });

}
function modificarRecurso(entrada, respuesta) {
    var registro = {
         nombre: entrada.body.nombre,
        cantidad: entrada.body.cantidad,
        descripcion: entrada.body.descripcion,
        ubicacion: entrada.body.ubicacion,        
        usuarioId:entrada.body.usuarioId

    };

    var codigo = 1;
    var condicion = {nombre: entrada.body.nombre};
    var sql = "update recurso set ? where ?";
    db.query(sql, [registro, condicion], function (error, resp) {
        if (error) {
            codigo = -1;
        }
        var object = {codigo: codigo};
        object = JSON.stringify(object);
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
        respuesta.end(object);


    });
}
function crearRecurso(entrada, respuesta) {
    var registro = {
        nombre: entrada.body.nombre,
        cantidad: entrada.body.cantidad,
        descripcion: entrada.body.descripcion,
        ubicacion: entrada.body.ubicacion,
        tarea: entrada.body.tarea,        
        usuarioId:entrada.body.usuarioId
    };
    var sql = "insert into recurso set ?";
     var codigo = 1;
    db.query(sql, registro, function (error, resp) {
        if (error) {
           console.log(error);
           codigo=-1;
        } else {
            var object = {codigo: codigo};
            object = JSON.stringify(object);
            respuesta.writeHead(200, {'Content-Type': 'application/json'});
            respuesta.end(object);
        }
    });
}

function buscarRecurso(entrada, respuesta) {
        var nombre = [entrada.body.nombre];
        console.log(nombre);
        var sql = 'select nombre,cantidad,descripcion,ubicacion from recurso where nombre=? AND usuarioId=?';

        db.query(sql, [nombre,entrada.body.usuarioId], function (error, filas) {
            if (error) {
                console.log(error);
                return;               
            }
            if(filas.length>0){
            var object = {codigo:1,nombre:filas[0].nombre,cantidad:filas[0].cantidad,
                descripcion:filas[0].descripcion,ubicacion:filas[0].ubicacion};
            
            console.log(object);
            object = JSON.stringify(object);
            respuesta.writeHead(200,{'Content-Type':'application/json'});
            respuesta.end(object);
            }else{
            var object = {codigo:-1};
            object = JSON.stringify(object);
            respuesta.writeHead(200,{'Content-Type':'application/json'});
            respuesta.end(object);
            }
            
            
            
        });
    
}


exports.listarRecurso = listarRecurso;
exports.listarForaneaTarea = listarForaneaTarea;
exports.buscarRecurso = buscarRecurso;
exports.crearRecurso = crearRecurso;
exports.modificarRecurso = modificarRecurso;
exports.eliminarRecurso = eliminarRecurso;
