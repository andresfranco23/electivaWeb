/*global __dirname*/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
var formidable = require('formidable');
var db = require('./static/dao/db');
var login = require('./static/dao/daoLogin');
var proyecto = require('./static/dao/daoProyectos');
var cargo = require('./static/dao/daoCargo');
var tarea = require('./static/dao/daoTarea');
var recurso = require('./static/dao/daoRecurso');
var reunion = require('./static/dao/daoReunion');
var integrante = require('./static/dao/daoIntegrantes');
var actividad = require('./static/dao/daoActividad');
var integrante = require('./static/dao/daoIntegrantes');
var actividad = require('./static/dao/daoActividad');
var proyectoIntegrante = require('./static/dao/daoProyectosIntegrante');
var actividadIntegrante = require('./static/dao/daoActividadesIntegrante');



function configurarServidor() {
    
    app.use(express.static(__dirname+'/static'));
    server=app.listen(8888,function(){
       console.log("servidor web iniciado!"); 
    });
    
}

app.post('/login',function(entrada,respuesta){
    login.validar(entrada,respuesta);
});
app.post('/registrousuario',function(entrada,respuesta){
    login.registrarUsuario(entrada,respuesta);
});

app.post('/crearProyecto',function(entrada,respuesta){
    proyecto.crearProyecto(entrada,respuesta);
});

app.get('/listadoForaneaProyectos',function(entrada,respuesta){
   cargo.listadoProyectos(entrada,respuesta);
});


app.post('/modificarProyecto',function(entrada,respuesta){
    proyecto.modificarProyecto(entrada,respuesta);
});


app.post('/eliminarProyecto',function(entrada,respuesta){
    proyecto.eliminarProyecto(entrada,respuesta);
});

app.post('/buscarProyecto',function(entrada,respuesta){
    proyecto.buscarProyecto(entrada,respuesta);
});

app.post('/listadoProyectos',function(entrada,respuesta){
    proyecto.listadoProyectos(entrada,respuesta);

});





app.post('/crearCargo',function(entrada,respuesta){
    cargo.crearCargo(entrada,respuesta);
});

app.post('/buscarCargo',function(entrada,respuesta){
    cargo.buscarCargo(entrada,respuesta);
});

app.post('/listarCargo',function(entrada,respuesta){
   cargo.listarCargo(entrada,respuesta);
});


app.post('/modificarCargo',function(entrada,respuesta){
    cargo.modificarCargo(entrada,respuesta);
});


app.post('/eliminarCargo',function(entrada,respuesta){
    cargo.eliminarCargo(entrada,respuesta);
});

app.post('/buscarCargo',function(entrada,respuesta){
    cargo.buscarCargo(entrada,respuesta);
});


app.post('/listarForaneaCargos',function(entrada,respuesta){
   cargo.listadoProyectos(entrada,respuesta); 
});

/***
 * LLAMO LAS FUNCIONES PARA LA CREACION DE SERVICIOS DE RECURSOS
 */
app.post('/crearRecurso',function(entrada,respuesta){
    recurso.crearRecurso(entrada,respuesta);
});

app.post('/buscarRecurso',function(entrada,respuesta){
    recurso.buscarRecurso(entrada,respuesta);
});

app.post('/listarRecurso',function(entrada,respuesta){
   recurso.listarRecurso(entrada,respuesta);
});

app.post('/listarForaneaTarea',function(entrada,respuesta){
   recurso.listarForaneaTarea(entrada,respuesta);
});

app.post('/modificarRecurso',function(entrada,respuesta){
    recurso.modificarRecurso(entrada,respuesta);
});

app.post('/dellRecurso',function(entrada,respuesta){
    recurso.eliminarRecuso(entrada,respuesta);
});
/**
 *  LLAMO LAS FUNCIONES PARA LA CREACION DE SERVICIOS DE TAREAS
 */
app.post('/crearTarea',function(entrada,respuesta){
    tarea.crearTarea(entrada,respuesta);
});

app.post('/buscarTarea',function(entrada,respuesta){
    tarea.buscarTarea(entrada,respuesta);


});

app.post('/listarTarea',function(entrada,respuesta){
   tarea.listarTarea(entrada,respuesta);
});

app.post('/listarForaneactividad',function(entrada,respuesta){
   tarea.listarForaneactividad(entrada,respuesta);
});


app.post('/modificarTarea',function(entrada,respuesta){
    tarea.modificarTarea(entrada,respuesta);
});

app.post('/eliminarTarea',function(entrada,respuesta){
    tarea.eliminarTarea(entrada,respuesta);
});
/***
 * LLAMO LAS FUNCIOENS PARA LA CREACION DE SERVICIOS EN LA REUNION
 */

app.post('/crearReunion',function(entrada,respuesta){
    reunion.crearReunion(entrada,respuesta);
});

app.post('/buscarReunion',function(entrada,respuesta){
    reunion.buscarReunion(entrada,respuesta);
});

app.post('/listarReunion',function(entrada,respuesta){
   reunion.listarReunion(entrada,respuesta);
});


app.post('/modificarReunion',function(entrada,respuesta){
    reunion.modificarReunion(entrada,respuesta);
});


app.post('/eliminarReunion',function(entrada,respuesta){
    reunion.eliminarReunion(entrada,respuesta);
});

/*Integrantes*/

app.post('/listarForaneaProyectos',function(entrada,respuesta){
    integrante.listadoProyectos(entrada,respuesta);
});

app.get('/listarIntegrantes',function(entrada,respuesta){
   integrante.listadoIntegrantes(respuesta);
    
    
});

app.post('/buscarIntegrante',function(entrada,respuesta){
   integrante.buscarIntegrante(entrada,respuesta); 
});

app.post('/crearIntegrante',function(entrada,respuesta){
   integrante.crearIntegrante(entrada,respuesta);
});

app.post('/eliminarIntegrante',function(entrada,respuesta){
   integrante.eliminarIntegrante(entrada,respuesta); 
});

app.post('/modificarIntegrante',function(entrada,respuesta){
   integrante.modificarIntegrante(entrada,respuesta); 
});



/*Actividades*/

app.post('/crearActividad',function(entrada,respuesta){
    actividad.crearActividad(entrada,respuesta);
});

app.post('/modificarActividad',function(entrada,respuesta){
    actividad.modificarActividad(entrada,respuesta);
    
});

app.post('/listActividad',function(entrada,respuesta){
   actividad.listarActividad(entrada,respuesta); 
});

app.post('/eliminarActividad',function(entrada,respuesta){
   actividad.eliminarActividad(entrada,respuesta); 
});

app.post('/listarForaneaIntegrantes',function(entrada,respuesta){
   actividad.listadoIntegrantes(entrada,respuesta);
    
});


app.get('/listarForaneaProyectos',function(entrada,respuesta){
   actividad.listadoProyectos(entrada,respuesta); 
});

app.post('/crearCargo',function(entrada,respuesta){
    cargo.crearCargo(entrada,respuesta);
});

app.post('/buscarCargo',function(entrada,respuesta){
    cargo.buscarCargo(entrada,respuesta);
});

app.post('/listarCargo',function(entrada,respuesta){
   cargo.listarCargo(entrada,respuesta);
});


app.post('/modificarCargo',function(entrada,respuesta){
    cargo.modificarCargo(entrada,respuesta);
});


app.post('/eliminarCargo',function(entrada,respuesta){
    cargo.eliminarCargo(entrada,respuesta);
});

app.post('/buscarCargo',function(entrada,respuesta){
    cargo.buscarCargo(entrada,respuesta);
});


app.post('/listarForaneaCargos',function(entrada,respuesta){
   cargo.listadoProyectos(entrada,respuesta); 
});



/*Integrantes*/

app.post('/listarForaneaProyectos',function(entrada,respuesta){
    integrante.listadoProyectos(entrada,respuesta);
});

app.get('/listarIntegrantes',function(entrada,respuesta){
   integrante.listadoIntegrantes(respuesta);
    
    
});

app.post('/buscarIntegrante',function(entrada,respuesta){
   integrante.buscarIntegrante(entrada,respuesta); 
});

app.post('/crearIntegrante',function(entrada,respuesta){
   integrante.crearIntegrante(entrada,respuesta);
});

app.post('/eliminarIntegrante',function(entrada,respuesta){
   integrante.eliminarIntegrante(entrada,respuesta); 
});

app.post('/modificarIntegrante',function(entrada,respuesta){
   integrante.modificarIntegrante(entrada,respuesta); 
});



/*Actividades*/

app.post('/crearActividad',function(entrada,respuesta){
    actividad.crearActividad(entrada,respuesta);
});

app.post('/modificarActividad',function(entrada,respuesta){
    actividad.modificarActividad(entrada,respuesta);
    
});

app.post('/listarActividad',function(entrada,respuesta){
   actividad.listarActividad(entrada,respuesta); 
});

app.post('/eliminarActividad',function(entrada,respuesta){
   actividad.eliminarActividad(entrada,respuesta); 
});

app.post('/listarForaneaIntegrantes',function(entrada,respuesta){
   actividad.listadoIntegrantes(entrada,respuesta);
    
});


app.get('/listarForaneaProyectos',function(entrada,respuesta){
   actividad.listadoProyectos(entrada,respuesta); 
});

app.post('/listadoProyectosIntegrante',function(entrada,respuesta){
    proyectoIntegrante.listadoProyectosIntegrante(entrada,respuesta);
});

app.post('/listadoActividadesIntegrante',function(entrada,respuesta){
    actividadIntegrante.listadoActividadesIntegrante(entrada,respuesta);
});

app.post('/listarTareaActividad',function(entrada,respuesta){
    actividadIntegrante.listarTareaActividad(entrada,respuesta);
});





exports.configurarServidor = configurarServidor;

