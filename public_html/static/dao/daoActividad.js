
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var db = require('./db');


function listarActividad(entrada,respuesta) {
    
        var usuarioId = entrada.body.usuarioId;
        var sql = 'select nombre,descripcion,idIntegrante,idProyecto,inicio,fin from actividad where usuarioId=? ';
        db.query(sql,usuarioId,function (error, filas) {
        if (error) {
            console.log(error);
            return;
        }
        
        var arreglo = [];
        for (var i = 0; i < filas.length; i++) {
            arreglo.push({nombre: filas[i].nombre, descripcion: filas[i].descripcion,idIntegrante:filas[i].idIntegrante,idProyecto:filas[i].idProyecto,inicio:filas[i].inicio,fin:filas[i].fin});
        }
     
        console.log(arreglo);
        arreglo = JSON.stringify(arreglo);
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
        respuesta.end(arreglo);

    });
    
   

}
function eliminarActividad(pedido,respuesta){
        var nombre = pedido.body.nombre;
        var sql = 'delete from actividad where nombre=?';
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
function modificarActividad(entrada, respuesta) {
    var registro = {
        
        descripcion: entrada.body.descripcion,
        idIntegrante: entrada.body.idIntegrante,
        idProyecto: entrada.body.idProyecto,
        inicio: entrada.body.inicio,
        fin:entrada.body.fin

    };

    var codigo = 1;
    var condicion = {nombre: entrada.body.nombre};
    var sql = "update actividad set ? where ?";
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
function crearActividad(entrada, respuesta) {
    var registro = {
        nombre: entrada.body.nombre,
        descripcion: entrada.body.descripcion,
        idIntegrante: entrada.body.idIntegrante,
        idProyecto: entrada.body.idProyecto,
        inicio:entrada.body.inicio,
        fin:entrada.body.fin,
        usuarioId:entrada.body.usuarioId
    };
    var sql = "insert into actividad set ?";
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



function listadoIntegrantes(entrada,respuesta) {

var idProyecto = entrada.body.idProyecto;
console.log(idProyecto);
    var sql = 'select ip.id as id,r.nombre as nombre  from integrante_proyecto ip  join  registro r on ip.idIntegrante = r.id where ip.idProyecto=?';

    //Se realiza la consulta, recibiendo por parametro filas los registros de la base de datos.         
    db.query(sql,idProyecto,function (error, filas) {
        if (error) {
            console.log(error);
            return;
        }
        var arreglo=[];
        
        //Se recorren los registros obtenidos
               
        for (var f = 0; f < filas.length; f++) {
           arreglo.push({id:filas[f].id,nombre:filas[f].nombre});
        }
        
        console.log(arreglo);
        arreglo = JSON.stringify(arreglo);
        
        
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
       
        respuesta.end(arreglo);
        
    });
}

function listadoProyectos(entrada,respuesta) {

var usuarioId = entrada.body.usuarioId;
    var sql = 'select id,nombre from proyecto  where usuarioId=?';

    //Se realiza la consulta, recibiendo por parametro filas los registros de la base de datos.         
    db.query(sql,usuarioId,function (error, filas) {
        if (error) {
            console.log('error en el listado');
            return;
        }
        var arreglo=[];
        
        //Se recorren los registros obtenidos
                
        for (var f = 0; f < filas.length; f++) {
           arreglo.push({id:filas[f].id,nombre:filas[f].nombre});
        }
        arreglo = JSON.stringify(arreglo);
        
        
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
       
        respuesta.end(arreglo);
        
    });
}

exports.listarActividad = listarActividad;
exports.crearActividad = crearActividad;
exports.modificarActividad = modificarActividad;
exports.listadoIntegrantes = listadoIntegrantes;
exports.eliminarActividad = eliminarActividad;
exports.listadoProyectos = listadoProyectos;
