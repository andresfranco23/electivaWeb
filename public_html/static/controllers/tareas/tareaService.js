
"use strict";
app.service('tareaService', function ($http, $httpParamSerializerJQLike) {
    /*Se define una funcion interna llamada logIn, que recibe 2 parametros*/
    var usuarioId = sessionStorage.getItem("usuarioId");

    this.guardarTarea = function (tarea) {
        var promise = $http({
            method: "post",
            url: "/crearTarea",
            data: $httpParamSerializerJQLike({
                actividad : tarea.actividad,
                nombre: tarea.nombre,
                porcentaje: tarea.porcentaje,
                estado: tarea.estado,
                inicio: tarea.inicio,
                fin:tarea.fin,
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
    this.updateTarea = function (tarea) {


        var promise = $http({
            method: "post",
            url: "/modificarTarea",
            data: $httpParamSerializerJQLike({                
                 actividad : tarea.actividad,
                nombre: tarea.nombre,
                porcentaje: tarea.porcentaje,
                estado: tarea.estado,
                inicio: tarea.inicio,
                fin:tarea.fin,
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

    this.listTarea = function () {
        var promise = $http({
            method: "post",
            url: "/listarTarea",
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
    
    /***
     * Listar actividad
     * @param {type} tarea
     * @returns La lista de actividades
     */
    
    this.lActividad = function () {
        var promise = $http({
            method: "post",
            url: "/listarForaneactividad",
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
    
    this.deleteTarea = function (tarea) {
       
        var promise = $http({
            method: "post",
            url: "/eliminarTarea",
            data: $httpParamSerializerJQLike({
                nombre: tarea.nombre}),
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
       this.buscarTarea = function (tarea) {        
        var promise = $http({
            method: "post",
            url: "/buscarTarea",
            data: $httpParamSerializerJQLike({                
                nombre: tarea.nombre,
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
    
    
    this.listarProyectos = function () {
        var promise = $http({
            method: "post",
            url: "/listarForaneaCargos",
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
    
});
