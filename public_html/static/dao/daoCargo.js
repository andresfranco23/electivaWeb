
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var db = require('./db');


function listarCargo(entrada,respuesta) {
    var sql = "select nombre,descripcion,proyectoId, horario, salario from cargo where usuarioId=? ";
    db.query(sql,entrada.body.usuarioId,function (error, filas) {
        if (error) {
            console.log(error);
            return;
        }
        
        var arreglo = [];
        for (var i = 0; i < filas.length; i++) {
            arreglo.push({nombre: filas[i].nombre, descripcion: filas[i].descripcion,proyectoId:filas[i].proyectoId,horario:filas[i].horario,salario:filas[i].salario});
        }
        arreglo = JSON.stringify(arreglo);
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
        respuesta.end(arreglo);

    });

}
function eliminarCargo(pedido,respuesta){
        var nombre = pedido.body.nombre;
        var sql = 'delete from cargo where nombre=?';
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
function modificarCargo(entrada, respuesta) {
    var registro = {
        nombre: entrada.body.nombre,
        descripcion: entrada.body.descripcion,
        horario: entrada.body.horario,
        salario: entrada.body.salario,
        proyectoId: entrada.body.proyectoId,
        usuarioId:entrada.body.usuarioId

    };

    var codigo = 1;
    var condicion = {nombre: entrada.body.nombre};
    var sql = "update cargo set ? where ?";
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
function crearCargo(entrada, respuesta) {
    var registro = {
        nombre: entrada.body.nombre,
        descripcion: entrada.body.descripcion,
        horario: entrada.body.horario,
        salario: entrada.body.salario,
        proyectoId:entrada.body.proyectoId,
        usuarioId:entrada.body.usuarioId
    };
    var sql = "insert into cargo set ?";
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



function listadoProyectos(entrada,respuesta) {

    var sql = 'select id,nombre from proyecto where usuarioId=?';

    //Se realiza la consulta, recibiendo por parametro filas los registros de la base de datos.         
    db.query(sql,entrada.body.usuarioId,function (error, filas) {
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

function buscarCargo(entrada, respuesta) {
        var nombre = [entrada.body.nombre];
        console.log(nombre);
        //Se manda el codigo en la busqueda

        var sql = 'select nombre,descripcion,proyectoId,horario,salario from cargo where nombre=? AND usuarioId=?';

        db.query(sql, [nombre,entrada.body.usuarioId], function (error, filas) {
            if (error) {
                console.log(error);
                return;
                
            }
            if(filas.length>0){
            var object = {codigo:1,nombre:filas[0].nombre,descripcion:filas[0].descripcion,
                proyectoId:filas[0].proyectoId,horario:filas[0].horario,salario:filas[0].salario};
            
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

exports.listarCargo = listarCargo;
exports.crearCargo = crearCargo;
exports.modificarCargo = modificarCargo;
exports.listadoProyectos = listadoProyectos;
exports.eliminarCargo = eliminarCargo;
exports.buscarCargo = buscarCargo;
