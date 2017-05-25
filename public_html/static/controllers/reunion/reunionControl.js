"use strict";

app.controller('controladorReunion', function ($scope, $window, reunionesService) {

    $scope.reunion = ""; 

    $scope.listadoReunion;
   $scope.crearReunion = function (form) {
        console.log("entro al metodo crear reunion");
        console.log($scope.reunion);
        if (form.$valid) {
            reunionesService.guardarReunion($scope.reunion).then(function (response) {
                if (response.codigo === 1) {
                    alert("REUNION REGISTRADA!");
                    $scope.reunion = "";
                    $scope.listarReunion();
                } else {
                    alert("LA REUNION YA SE ENCUENTRA REGISTRADO!");
                }
            });
        } else {
            alert("debe diligenciar toda la informacion");
        }
    };
   $scope.modificarReunion = function (form) {
        if (form.$valid) {
            reunionesService.modificarReunion($scope.reunion).then(function (response) {
                if (response.codigo === 1) {
                    alert("DATOS MODIFICADOS CON EXITO!");
                    $scope.reunion = "";
                    $scope.listarReunion();

                } else {
                    alert("ERROR AL MODIFICAR LOS DATOS");
                }
            });
        } else {
            alert("debe diligenciar toda la informacion!");
        }
    };
   $scope.buscarReunion = function (form) {
       console.log("entro buscar");
        if (form.$valid) {
            reunionesService.buscarReunion($scope.reunion).then(function (response) {
                if (response.codigo === 1) {
                    $scope.reunion = response;
                    console.log($scope.reunion);
                } else {
                    alert("NO DATA FOUND!");
                }
            });
        } else {
            alert("debe ingresar un nombre a buscar");
        }
    };
   $scope.listarReunion = function () {

        reunionesService.listarReunion().then(function (response) {
            $scope.listadoReunion = response;
        });
    };
    
   $scope.eliminarReunion = function (form) {

        if (form.$valid) {
            reunionesService.eliminarReunion($scope.reunion).then(function (response) {
                if (response.codigo === 1) {
                    alert("EXITO");       
                    $scope.reunion="";
                   $scope.listarReunion();
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
        $scope.reunion = $scope.selected;
    };
});
