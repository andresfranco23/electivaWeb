"use strict";

app.service('logInService', function ($http, $httpParamSerializerJQLike) {

    this.logIn = function (identificacion) {
        /*El resultado del $http es almacenado en la promesa*/
        /*Ademas se debe definir el tipo de cabecera para enviar los datos*/
        var promise = $http({
            method: "post",
            url: "/login",
            data: $httpParamSerializerJQLike({
                usuario: identificacion.usuario,
                password: identificacion.password}),
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

    this.crearUsuario = function (identificacion) {        
        var promise = $http({
            method: "post",
            url: "/registrousuario",
            data: $httpParamSerializerJQLike({
                tipodocumento: identificacion.tipodocumento,                
                numero: identificacion.numero,
                nombre: identificacion.nombre,
                apellido: identificacion.apellido,
                tipouser: identificacion.tipouser,
                email: identificacion.email,
                password: identificacion.password,
                repeatpassword: identificacion.repeatpassword,
                fechanacimiento: identificacion.fechanacimiento
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
            /*Todos los datos se almacenan en .data*/
            return response.data;
            
            console.log(response);
        }, function myError(response) {                        
            
            console.log(response.statusText);
        });

        /*Luego se retorna la promesa*/
        return promise;
    };


});