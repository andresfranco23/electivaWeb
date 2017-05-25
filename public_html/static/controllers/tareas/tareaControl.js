"use strict";

app.controller('controladorTareas', function ($scope, $window, tareaService) {

    $scope.tarea = "";
    $scope.lTarea;
    $scope.crearTarea = function (form) {
        
        if (form.$valid) {
            tareaService.guardarTarea($scope.tarea).then(function (response) {
                if (response.codigo === 1) {
                    alert("TAREA REGISTRADO!");
                    $scope.tarea = "";
                    $scope.listarTarea();
                } else {
                    alert("LA TAREA YA SE ENCUENTRA REGISTRADO!");
                }
            });
        } else {
            alert("debe diligenciar toda la informacion");
        }
    };
    $scope.modificarTarea = function (form) {
        if (form.$valid) {
            tareaService.updateTarea($scope.tarea).then(function (response) {
                if (response.codigo === 1) {
                    alert("DATOS MODIFICADOS CON EXITO!");
                    $scope.tarea = "";
                    $scope.listarTarea();
                } else {
                    alert("ERROR AL MODIFICAR LOS DATOS");
                }
            });
        } else {
            alert("debe diligenciar toda la informacion!");
        }
    };

    $scope.buscaTarea = function (form) {
        if (form.$valid) {
            tareaService.buscarTarea($scope.tarea).then(function (response) {
                /*El resultado de la promesa se recibe por parametro*/
                if (response.codigo === 1) {
                    $scope.tarea = response;
                    console.log($scope.tarea);
                } else {
                    alert("NO DATA FOUND!");
                }
            });
        } else {
            alert("debe ingresar un nombre a buscar");
        }
    };
   $scope.listarTarea = function () {

        tareaService.listTarea().then(function (response) {
          var entrada = [];
          for(var i=0;i<response.length;i++){
              entrada.push({actividad:response[i].actividad,nombreactividad:response[i].nombreactividad,nombre:response[i].nombre,porcentaje:response[i].porcentaje,estado:response[i].estado,inicio:new Date(response[i].inicio),fin:new Date(response[i].fin)});
          }
            $scope.lTarea = entrada;
            console.log(entrada);
        });
    };
    
    $scope.eliminarTarea = function (form) {
        if (form.$valid) {
            tareaService.deleteTarea($scope.tarea).then(function (response) {
                if (response.codigo === 1) {
                    alert("EXITO");   
                    $scope.tarea="";
                   $scope.listarTarea();
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
        $scope.tarea = $scope.selected;
        
    };
    $scope.listarForaneaActividades = function () {
        tareaService.lActividad().then(function (response) {
            $scope.listadoActividades = response;
        });
    };
    
    
});
