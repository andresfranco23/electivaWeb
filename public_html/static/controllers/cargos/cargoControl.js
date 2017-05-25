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
app.controller('controladorCargos', function ($scope, $window, cargoService) {


    /*info*/
    $scope.cargo = "";

    $scope.dias = [

        {opcion: "lunes"},
        {opcion: "martes"},
        {opcion: "miercoles"},
        {opcion: "jueves"},
        {opcion: "viernes"},
        {opcion: "sabado"},
        {opcion: "domingo"}

    ];


    $scope.listadoCargo;



    /*Se define una funcion en el controlador*/
    $scope.crearCargo = function (form) {

        console.log($scope.cargo);
        if (form.$valid) {
            cargoService.guardarCargo($scope.cargo).then(function (response) {
                /*El resultado de la promesa se recibe por parametro*/
                if (response.codigo === 1) {
                    alert("CARGO REGISTRADO!");

                    $scope.cargo = "";
                    $scope.listarCargo();
                } else {
                    alert("EL CARGO YA SE ENCUENTRA REGISTRADO!");
                }
            });
        } else {
            alert("debe diligenciar toda la informacion");
        }
    };
    $scope.modificarCargo = function (form) {
        if (form.$valid) {
            /*Se ejecuta la funcion mandando por parametro el objeto identificacion, 
             * el cual esta asociado a los input*/
            cargoService.modificarCargo($scope.cargo).then(function (response) {
                if (response.codigo === 1) {
                    alert("DATOS MODIFICADOS CON EXITO!");
                    $scope.cargo = "";
                    $scope.listarCargo();

                } else {
                    alert("ERROR AL MODIFICAR LOS DATOS");
                }
            });
        } else {
            alert("debe diligenciar toda la informacion!");
        }
    };

    $scope.buscarCargo = function (form) {



        if (form.$valid) {
            cargoService.buscarCargo($scope.cargo).then(function (response) {
                if (response.codigo === 1) {

                    
                    $scope.cargo = response;
                    console.log($scope.cargo);

                } else {
                    alert("NO DATA FOUND!");
                }


            });
        } else {
            alert("debe ingresar un nombre a buscar");
        }
    };



   $scope.listarCargo = function () {

        cargoService.listarCargo().then(function (response) {



        
            $scope.listadoCargo = response;

        });

    };
    
    $scope.eliminarCargo = function (form) {

        if (form.$valid) {
            /*Se ejecuta la funcion mandando por parametro el objeto identificacion, 
             * el cual esta asociado a los input*/
            cargoService.eliminarCargo($scope.cargo).then(function (response) {
                /*El resultado de la promesa se recibe por parametro*/
                if (response.codigo === 1) {
                    alert("EXITO");
                    
                   $scope.listarCargo();

                } else {
                    alert("ERROR!");
                }

            });
        } else {
            alert("debe ingresar un nombre a buscar!");
        }
    };

    $scope.getSelectedRow = function () {
        $scope.selected = this.obj;
        $scope.cargo = $scope.selected;
    };



    $scope.listarForaneaProyectos = function () {


        /*Se ejecuta la funcion mandando por parametro el objeto identificacion, 
         * el cual esta asociado a los input*/
        cargoService.listarProyectos().then(function (response) {
            $scope.listadoProyectos = response;

        });

    };





});
