var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var db = require('./db');



function validar(entrada, respuesta) {

    var usuario = entrada.body.usuario;
    var password = entrada.body.password;

    var sql = "select id,tipouser,email,password from registro where email=? AND password=?";
    
    db.query(sql, [usuario, password], function (error, filas) {
        if (error) {
            console.log(error);
            return;
        }
       
        if (filas.length > 0) {
                if(filas[0].tipouser==="Administrador"){
                    var object = {codigo: 1, type:"Administrador",usuarioId:filas[0].id};
                    object = JSON.stringify(object);
                    respuesta.writeHead(200, {'Content-Type': 'application/json'});
                    respuesta.end(object);
                }else if(filas[0].tipouser==="Integrante"){
                    var object = {codigo: 1, type:"Integrante",usuarioId:filas[0].id};
                    object = JSON.stringify(object);
                    respuesta.writeHead(200, {'Content-Type': 'application/json'});
                    respuesta.end(object);
                    
                    
                }
                
                
                
           

            
        } else {
            var object = {codigo: -1};
            object = JSON.stringify(object);
            respuesta.writeHead(200, {'Content-Type': 'application/json'});
            respuesta.end(object);
        }
    });



}

function registrarUsuario(entrada, respuesta) {


    var registro = {
        tipodocumento: entrada.body.tipodocumento,
        numero: entrada.body.numero,
        nombre: entrada.body.nombre,
        apellido: entrada.body.apellido,
        tipouser: entrada.body.tipouser,
        email: entrada.body.email,
        password: entrada.body.password,
        repeatpassword: entrada.body.repeatpassword,
        fechanacimiento: entrada.body.fechanacimiento
    };
    var codigo=1;
    var sql = 'insert into registro set ?';
    db.query(sql, registro, function (error, resp) {
   // db.query(sql, [tipodocumento, numero, nombre, apellido, tipouser, email, password, repeatpassword, fechanacimiento], function (error, respuesta) {
        if (error) {
            codigo = -1;
        } else {
            var object = {codigo: codigo};
            object = JSON.stringify(object);
            respuesta.writeHead(200, {'Content-Type': 'application/json'});
            respuesta.end(object);                        
        }
    });
}

exports.validar = validar;
exports.registrarUsuario = registrarUsuario;
