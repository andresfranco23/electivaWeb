
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var db = require('./db');


function listarTarea(entrada,respuesta) {
    var sql = "select a.id as ident,a.nombre as nombreactividad,t.nombre,t.porcentaje, t.estado, t.inicio,t.fin from tareas t join registro r on r.id=t.usuarioId join actividad a on r.id=a.usuarioId where t.usuarioId=? ";
    //var sql = "select a.nombre,t.nombre,t.porcentaje, t.estado, t.inicio,t.fin from tareas t join registro r on r.id=t.usuarioId join actividad a on r.id=a.usuarioId where t.usuarioId=? ";
    db.query(sql,entrada.body.usuarioId,function (error, filas) {
        if (error) {
            console.log(error);
            return;
        }
        
        var arreglo = [];
        for (var i = 0; i < filas.length; i++) {
            arreglo.push({actividad:filas[i].ident,nombreactividad: filas[i].nombreactividad, nombre: filas[i].nombre,porcentaje:filas[i].porcentaje,estado:filas[i].estado,inicio:filas[i].inicio,fin:filas[i].fin});
        }
        arreglo = JSON.stringify(arreglo);
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
        respuesta.end(arreglo);

    });

}
function listarForaneactividad(entrada,respuesta) {
    var usuario = entrada.body.usuarioId;
    var sql = "select id,nombre from actividad where usuarioId=?";
    db.query(sql,usuario,function (error, filas) {
        if (error) {
            console.log(error);
            return;
        }
        
        var arreglo = [];
        for (var i = 0; i < filas.length; i++) {
           arreglo.push({id:filas[i].id,nombre:filas[i].nombre});
        }
        arreglo = JSON.stringify(arreglo);
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
        respuesta.end(arreglo);

    });

}


function eliminarTarea(pedido,respuesta){
        var nombre = pedido.body.nombre;
        var sql = 'delete from tareas where nombre=?';
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
function modificarTarea(entrada, respuesta) {
    var registro = {
        actividad : entrada.body.actividad,
        nombre: entrada.body.nombre,
        porcentaje: entrada.body.porcentaje,
        estado: entrada.body.estado,
        inicio: entrada.body.inicio,
        fin:entrada.body.fin,
        usuarioId:entrada.body.usuarioId
    };

    var codigo = 1;
    var condicion = {nombre: entrada.body.nombre};
    var sql = "update tareas set ? where ?";
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
function crearTarea(entrada, respuesta) {
    var registro = {
        actividad : entrada.body.actividad,
        nombre: entrada.body.nombre,
        porcentaje: entrada.body.porcentaje,
        estado: entrada.body.estado,
        inicio: entrada.body.inicio,
        fin:entrada.body.fin,
        usuarioId:entrada.body.usuarioId
    };
    var sql = "insert into tareas set ?";
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


function buscarTarea(entrada, respuesta) {
        var nombre = [entrada.body.nombre];
        console.log(nombre);

        var sql = 'select actividad,nombre,porcentaje,estado,inicio,fin from tareas where nombre=? AND usuarioId=?';

        db.query(sql, [nombre,entrada.body.usuarioId], function (error, filas) {
            if (error) {
                console.log(error);
                return;
                
            }
            if(filas.length>0){
            var object = {codigo:1,actividad:filas[0].actividad,nombre:filas[0].nombre,porcentaje:filas[0].porcentaje,
                estado:filas[0].estado,inicio:filas[0].inicio,fin:filas[0].fin};
            
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

exports.listarTarea = listarTarea;
exports.crearTarea = crearTarea;
exports.modificarTarea = modificarTarea;
exports.listarForaneactividad = listarForaneactividad;
exports.eliminarTarea = eliminarTarea;
exports.buscarTarea = buscarTarea;
