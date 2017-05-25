"use strict";

app.service('actividadServiceIntegrante', function ($http, $httpParamSerializerJQLike) {
    /*Se define una funcion interna llamada logIn, que recibe 2 parametros*/
     var usuarioId=sessionStorage.getItem("usuarioId");
    
    this.guardar = function (proyecto) {
        /*El resultado del $http es almacenado en la promesa*/
        /*Ademas se debe definir el tipo de cabecera para enviar los datos*/
        var promise = $http({
            method: "post",
            url: "/crearProyecto",
            data: $httpParamSerializerJQLike({
                nombre: proyecto.nombre,
                inicio: proyecto.inicio,
                fin: proyecto.fin,
                etapa:proyecto.etapa,
                usuarioId:usuarioId
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
            /*Todos los datos se almacenan en .data*/
            return response.data;
        }, function myError(response) {
            alert("Error");
            alert(response.statusText);
        });

        /*Luego se retorna la promesa*/
        return promise;
    };
    this.modificar = function (proyecto) {
        
        
        var promise = $http({
            method: "post",
            url: "/modificarProyecto",
            data: $httpParamSerializerJQLike({
                nombre: proyecto.nombre,
                inicio: proyecto.inicio,
                fin: proyecto.fin,
                etapa:proyecto.etapa,
                usuarioId:usuarioId
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
            /*Todos los datos se almacenan en .data*/
            return response.data;
        }, function myError(response) {
            alert("Error");
            alert(response.statusText);
        });

        /*Luego se retorna la promesa*/
        return promise;
    };
    this.eliminar = function (proyecto) {
        /*El resultado del $http es almacenado en la promesa*/
        /*Ademas se debe definir el tipo de cabecera para enviar los datos*/
        
        
        
        var promise = $http({
            method: "post",
            url: "/eliminarProyecto",
            data: $httpParamSerializerJQLike({
                
                nombreBuscar: proyecto.nombreBuscar,
                usuarioId:usuarioId}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
            /*Todos los datos se almacenan en .data*/
            return response.data;
        }, function myError(response) {
            alert("Error");
            alert(response.statusText);
        });

        /*Luego se retorna la promesa*/
        return promise;
    };
    this.buscar = function (proyecto) {
        /*El resultado del $http es almacenado en la promesa*/
        /*Ademas se debe definir el tipo de cabecera para enviar los datos*/       
        var promise = $http({
            method: "post",
            url: "/buscarProyecto",
            data: $httpParamSerializerJQLike({
                
                nombreBuscar: proyecto.nombreBuscar,
                usuarioId:usuarioId
               }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
            /*Todos los datos se almacenan en .data*/
            return response.data;
        }, function myError(response) {
            alert("Error");
            alert(response.statusText);
        });

        /*Luego se retorna la promesa*/
        return promise;
    };
    this.listarActividadesIntegrante=function(){
        var promise = $http({
            method: "post",
            url: "/listadoActividadesIntegrante",
            data: $httpParamSerializerJQLike({
                usuarioId:usuarioId
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
            /*Todos los datos se almacenan en .data*/
            return response.data;
        }, function myError(response) {
            alert("Error");
            alert(response.statusText);
        });

        /*Luego se retorna la promesa*/
        return promise;
    };
    
     this.listTareaActividad = function (nombre) {
        var promise = $http({
            method: "post",
            url: "/listarTareaActividad",
            data: $httpParamSerializerJQLike({
                nombre:nombre,
                 usuarioId:usuarioId
                
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
            /*Todos los datos se almacenan en .data*/
            return response.data;
        }, function myError(response) {
            alert("Error");
            alert(response.statusText);
        });

        /*Luego se retorna la promesa*/
        return promise;
    };
    
    
});