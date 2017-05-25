
"use strict";
app.service('recursoService', function ($http, $httpParamSerializerJQLike) {
    var usuarioId = sessionStorage.getItem("usuarioId");

    this.guardarRecurso = function (recurso) {
        var promise = $http({
            method: "post",
            url: "/crearRecurso",
            data: $httpParamSerializerJQLike({
                nombre: recurso.nombre,
                cantidad: recurso.cantidad,
                descripcion: recurso.descripcion,
                ubicacion: recurso.ubicacion,
                tarea : recurso.tarea,
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
    this.modificarRecurso = function (recurso) {


        var promise = $http({
            method: "post",
            url: "/modificarRecurso",
            data: $httpParamSerializerJQLike({
                nombre: recurso.nombre,
                cantidad: recurso.cantidad,
                descripcion: recurso.descripcion,
                ubicacion: recurso.ubicacion,
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

    this.listarRecurso = function () {
        var promise = $http({
            method: "post",
            url: "/listarRecurso",
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
    this.deleteRecurso = function (recurso) {

        var promise = $http({
            method: "post",
            url: "/dellRecurso",
            data: $httpParamSerializerJQLike({
                nombre: recurso.nombre}),
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
    
    this.lTarea = function () {
        var promise = $http({
            method: "post",
            url: "/listarForaneaTarea",
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
    
    
    
       this.searchRecurso = function (recurso) {
        
        var promise = $http({
            method: "post",
            url: "/buscarRecurso",
            data: $httpParamSerializerJQLike({                
                nombre: recurso.nombre,
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
