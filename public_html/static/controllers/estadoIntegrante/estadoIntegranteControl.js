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
app.controller('controladorEstadoIntegrante', function ($scope, $window, estadoIntegranteService) {


   $scope.listadoEstadoIntegrante = function () {

        estadoIntegranteService.listarEstado().then(function (response) {
            
            var array = [];
            
            
          
            for(var i=0;i<response.length;i++){
                var actual = new Date();
                var fin = new Date(response[i].fin);
               
                
                if(fin<=actual && response[i].etapa==="100%"){
                    array.push({nombre:response[i].nombre,inicio:new Date(response[i].inicio).toLocaleDateString(),fin:new Date(response[i].fin).toLocaleDateString(),etapa:response[i].etapa,estado:"AL DIA"});
                }else{
                    array.push({nombre:response[i].nombre,inicio:new Date(response[i].inicio).toLocaleDateString(),fin:new Date(response[i].fin).toLocaleDateString(),etapa:response[i].etapa,estado:"RETRASADO"});

                }
                
            }
            
            
            
            $scope.listado = array;


        });

    };
    
    




});
