var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var db = require('./db');


function crearIntegrante(entrada,respuesta){
    
    
    
    
    var registro = {
        idIntegrante:entrada.body.idIntegrante,
        idProyecto:entrada.body.idProyecto
        
        
    };
    
    var sql = "insert into integrante_proyecto set ?";
    var codigo = 1;
    
    db.query(sql,registro,function(error,resp){
       
        if(error){
            console.log(error);
            codigo=-1;
        }
        var object = {codigo:codigo};
        object = JSON.stringify(object);
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
        respuesta.end(object);
        
    });
    
    
    
}

function modificarIntegrante(entrada,respuesta){
    
    var registro = {
      idIntegrante:entrada.body.idIntegrante,
      idProyecto:entrada.body.idProyecto
    };
    
    var sql = 'delete from integrante_proyecto where idIntegrante=?';
        var codigo = 1;
        db.query(sql,entrada.body.idIntegrante,function (error,response) {
           if(error){
               console.log(error);
           }
            
    });
    
    
    sql = "insert into integrante_proyecto set ?";
    var codigo = 1;
    
    db.query(sql,registro,function(error,resp){
       
        if(error){
            console.log(error);
            codigo=-1;
        }
        var object = {codigo:codigo};
        object = JSON.stringify(object);
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
        respuesta.end(object);
        
    });
   
    
    
}


 function listadoProyectos(entrada,respuesta) {
    
    var sql = 'select id,nombre,inicio,fin,etapa from proyecto where usuarioId=?';

    //Se realiza la consulta, recibiendo por parametro filas los registros de la base de datos.         
    db.query(sql,entrada.body.usuarioId,function (error, filas) {
        if (error) {
            console.log('error en el listado');
            return;
        }
        var arreglo=[];
        
        //Se recorren los registros obtenidos
        
        for (var f = 0; f < filas.length; f++) {
           arreglo.push({id:filas[f].id,nombre:filas[f].nombre,inicio:filas[f].inicio,fin:filas[f].fin,etapa:filas[f].etapa});
        }
        arreglo = JSON.stringify(arreglo);
        
        
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
       
        respuesta.end(arreglo);
        
    });
}


function buscarIntegrante(entrada, respuesta) {
        
        var identificacion = entrada.body.identificacion;
        
        //Se manda el codigo en la busqueda

        var sql = 'select r.id,r.numero,r.nombre,r.apellido,r.email,p.id as proyecto_id from registro r join integrante_proyecto ip on r.id=ip.idIntegrante join proyecto p on p.id=ip.idProyecto where r.numero = ?';

        db.query(sql,identificacion, function (error, filas) {
            if (error) {
                console.log(error);
                return;
                
            }
            if(filas.length>0){
              
            var object = {codigo:1,id:filas[0].id,identificacion:filas[0].numero,nombre:filas[0].nombre,apellido:filas[0].apellido,email:filas[0].email,proyecto_id:filas[0].proyecto_id};
            
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

function eliminarIntegrante(pedido,respuesta){
        
        var identificacion = pedido.body.idIntegrante;
        console.log(identificacion);
        var sql = 'delete from integrante_proyecto where idIntegrante=?';
        var codigo = 1;
        db.query(sql,identificacion,function (error,response) {
           if(error){
               codigo=-1;
           }
           var object = {codigo:codigo};
            object = JSON.stringify(object);
            respuesta.writeHead(200,{'Content-Type':'application/json'});
            respuesta.end(object);      
        });

}


 function listadoIntegrantes(respuesta) {
    
    var sql = 'select id,numero,nombre,apellido,email from registro where tipouser=?';

    //Se realiza la consulta, recibiendo por parametro filas los registros de la base de datos.         
    db.query(sql,"Integrante",function (error, filas) {
        if (error) {
            console.log('error en el listado');
            return;
        }
        var arreglo=[];
        
        //Se recorren los registros obtenidos
        
        for (var f = 0; f < filas.length; f++) {
           arreglo.push({id:filas[f].id,identificacion:filas[f].numero,nombre:filas[f].nombre,apellido:filas[f].apellido,email:filas[f].email});
        }
        arreglo = JSON.stringify(arreglo);
        
        
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
       
        respuesta.end(arreglo);
        
    });
}




exports.crearIntegrante=crearIntegrante;
exports.modificarIntegrante=modificarIntegrante;
exports.listadoProyectos=listadoProyectos;
exports.buscarIntegrante=buscarIntegrante;
exports.eliminarIntegrante=eliminarIntegrante;
exports.listadoIntegrantes=listadoIntegrantes;