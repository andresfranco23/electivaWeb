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
app.controller('controladorIntegrante', function ($scope, $window, IntegranteService) {


    /*info*/
    $scope.integrante = "";

    


    $scope.listadoIntegrantes;



    /*Se define una funcion en el controlador*/
    $scope.crearIntegrante = function (form) {

        console.log($scope.integrante);
        if (form.$valid) {
            IntegranteService.guardarIntegrante($scope.integrante).then(function (response) {
                /*El resultado de la promesa se recibe por parametro*/
                if (response.codigo === 1) {
                    alert("INTEGRANTE REGISTRADO!");

                    $scope.integrante = "";
                    
                } else {
                    alert("EL INTEGRANTE YA TIENE UN PROYECTO ASIGNADO!");
                }
            });
        } else {
            alert("debe diligenciar toda la informacion");
        }
    };
    $scope.modificarIntegrante = function (form) {
        if (form.$valid) {
            /*Se ejecuta la funcion mandando por parametro el objeto identificacion, 
             * el cual esta asociado a los input*/
            IntegranteService.modificarIntegrante($scope.integrante).then(function (response) {
                if (response.codigo === 1) {
                    alert("DATOS MODIFICADOS CON EXITO!");
                    $scope.integrante = "";
                    

                } else {
                    alert("ERROR AL MODIFICAR LOS DATOS");
                }
            });
        } else {
            alert("debe diligenciar toda la informacion!");
        }
    };

    



   $scope.listarIntegrantes = function () {

        IntegranteService.listar().then(function (response) {



        
            $scope.listadoIntegrantes = response;

        });

    };
    
    $scope.eliminarIntegrante = function () {

        
            /*Se ejecuta la funcion mandando por parametro el objeto identificacion, 
             * el cual esta asociado a los input*/
            IntegranteService.eliminarIntegrante($scope.integrante).then(function (response) {
                /*El resultado de la promesa se recibe por parametro*/
                if (response.codigo === 1) {
                    alert("EXITO");
                    
                  $scope.integrante = "";

                } else {
                    alert("ERROR!");
                }

            });
        
    };

    $scope.getSelectedRow = function () {
        
       $scope.integrante = this.obj;
       
       IntegranteService.buscarIntegrante($scope.integrante).then(function(response){
           if(response.codigo===1){
               
               $scope.integrante = response;
               console.log($scope.integrante);
           }
       });
        
        
        
       
        
    };



    $scope.listarForaneaProyectos = function () {


        /*Se ejecuta la funcion mandando por parametro el objeto identificacion, 
         * el cual esta asociado a los input*/
        IntegranteService.listarProyectos().then(function (response) {
            
          $scope.listadoProyectos = response;
          
        });

    };





});
