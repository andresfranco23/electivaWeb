"use strict";
app.controller('controladorRecursos', function ($scope, $window, recursoService) {
    /*info*/
    $scope.recurso = "";   
    $scope.listadoRecurso;
    $scope.crearRecurso = function (form) {
        console.log($scope.recurso);
        if (form.$valid) {
            recursoService.guardarRecurso($scope.recurso).then(function (response) {
                if (response.codigo === 1) {
                    alert("RECURSO REGISTRADO!");
                    $scope.recurso = "";
                    $scope.listarRecurso();
                } else {
                    alert("EL RECURSO YA SE ENCUENTRA REGISTRADO!");
                }
            });
        } else {
            alert("debe diligenciar toda la informacion");
        }
    };
    $scope.modificaRecurso = function (form) {
        if (form.$valid) {
            /*Se ejecuta la funcion mandando por parametro el objeto identificacion, 
             * el cual esta asociado a los input*/
            recursoService.modificarRecurso($scope.recurso).then(function (response) {
                if (response.codigo === 1) {
                    alert("DATOS MODIFICADOS CON EXITO!");
                    $scope.recurso = "";
                   $scope.listarRecurso();

                } else {
                    alert("ERROR AL MODIFICAR LOS DATOS");
                }
            });
        } else {
            alert("debe diligenciar toda la informacion!");
        }
    };

    $scope.buscaRecurso = function (form) {
        if (form.$valid) {
            recursoService.searchRecurso($scope.recurso).then(function (response) {
                if (response.codigo === 1) {
                    $scope.recurso = response;
                    console.log($scope.recurso);
                } else {
                    alert("NO SE ENCONTRARON RECURSOS");
                }
            });
        } else {
            alert("debe ingresar un nombre a buscar");
        }
    };



   $scope.listarRecurso = function () {

        recursoService.listarRecurso().then(function (response) {
            $scope.listadoRecurso = response;
        });
    };
    
    $scope.eliminaRecurso = function (form) {
        if (form.$valid) {
            recursoService.deleteRecurso($scope.recurso).then(function (response) {
                if (response.codigo === 1) {
                    alert("EXITO");                    
                   $scope.listarRecurso();

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
        $scope.recurso = $scope.selected;
    };
    
    $scope.listarForaneaTarea = function () {
        recursoService.lTarea().then(function (response) {
            $scope.listadoTarea = response;
        });
    };
    
    
});
