"use strict";

/*El use strict hace que se deba codificar de manera correcta, siendo estricto
 * a la hora de compilar el codigo ejemplo: 
 * x = 3.14; // This will cause an error (x is not defined)*/


/* global app */

/*Toda funcion de controlador debe tener un $scope, que es la referencia a todos
 * los elementos que pertenecen al constrolador*/
/*app.controller(nombre de la funcion)  ($scope, nombre de los servicios a utilizar)*/
/*$windows servicio por defecto para poder utilizar refresco de pagina y redireccionamiento*/
/*logInService, nombre del servicio que contiene la promesa. */
app.controller('CtlLogIn', function ($scope, $window, logInService) {
    $scope.identificacion = "";
    $scope.logIn = function (form) {
        if (form) {
            logInService.logIn($scope.identificacion).then(function (response) {
                if (response.codigo === 1 && response.type=="Administrador") {
                    
                    sessionStorage.setItem("session", response.type);
                    sessionStorage.setItem("usuarioId",response.usuarioId);
                    
                    
  
                    $window.location.href = 'http://localhost:8888/views/principal.html';
                }else if(response.codigo === 1 && response.type=="Integrante"){
                    
                     sessionStorage.setItem("session",response.type);
                     sessionStorage.setItem("usuarioId",response.usuarioId);
                     $window.location.href = 'http://localhost:8888/views/PrincipalIntegrante.html';
                }else{
                    alert("verifique correo y password");
                }
            });
        } else {
            alert("Verifique los datos ingresados");
        }
    };

    $scope.registrarUsuarios = function (form) {
        if (form ) {
            if($scope.identificacion.password===$scope.identificacion.repeatpassword){
                logInService.crearUsuario($scope.identificacion).then(function (response) {                
                
                if (response.codigo === 1) {
                    alert("El usuario se ha creado con exito");
                    $scope.identificacion = "";
                    $window.location.href="http://localhost:8888";
                } else {
                    alert("No se pudo crear el registro");
                    $scope.identificacion = "";
                }
            });
            }else{
                alert("las password no coinciden!");
            }
            
            
        } else {
            alert("Verifique los datos ingresados");
        }
    };

    /*Se define una funcion para agregar*/
    $scope.logOut = function () {
        /*Se eliminan las variables de sesion*/
        sessionStorage.clear();
        /*Redirecciona*/
        $window.location.href = 'http://localhost:8888';
    };
});






