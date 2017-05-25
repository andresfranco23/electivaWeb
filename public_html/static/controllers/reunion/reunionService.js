
"use strict";

app.service('reunionesService', function ($http, $httpParamSerializerJQLike) {
    var usuarioId = sessionStorage.getItem("usuarioId");

    this.guardarReunion = function (reunion) {
        var promise = $http({
            method: "post",
            url: "/crearReunion",
            data: $httpParamSerializerJQLike({
                nombre: reunion.nombre,
                ubicacion: reunion.ubicacion,
                tematica: reunion.tematica,
                usuarioId: usuarioId
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
    this.modificarReunion = function (reunion) {
        var promise = $http({
            method: "post",
            url: "/modificarReunion",
            data: $httpParamSerializerJQLike({
                nombre: reunion.nombre,
                ubicacion: reunion.ubicacion,
                tematica: reunion.tematica,
                usuarioId: usuarioId

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

    this.listarReunion = function () {
        var promise = $http({
            method: "post",
            url: "/listarReunion",
            data: $httpParamSerializerJQLike({
                usuarioId: usuarioId
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
    this.eliminarReunion = function (reunion) {
        var promise = $http({
            method: "post",
            url: "/eliminarReunion",
            data: $httpParamSerializerJQLike({
                nombre: reunion.nombre}),
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
    this.buscarReunion = function (reunion) {
        var promise = $http({
            method: "post",
            url: "/buscarReunion",
            data: $httpParamSerializerJQLike({
                nombre: reunion.nombre,
                usuarioId: usuarioId

            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
            /*Todos los datos se almacenan en .data*/
            return response.data;
        }, function myError(response) {
            alert("Error");
            alert(response.statusText);
        });
        return promise;
    };

});
