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
app.controller('controladorActividadesIntegrante', function ($scope, $window, actividadServiceIntegrante) {


    /*info*/
    $scope.proyecto="";
    
    $scope.etapas = [
        
        {opcion:"0%-25%"},
        {opcion:"25%-50%"},
        {opcion:"50%-75%"},
        {opcion:"75%-100%"}        
    ];
    

    $scope.listadoActividades;
    
            

    /*Se define una funcion en el controlador*/
    $scope.crearProyecto = function (form) {
        
            if(form.$valid){
                
                actividadServiceIntegrante.guardar($scope.proyecto).then(function (response) {
                /*El resultado de la promesa se recibe por parametro*/
                if(response.codigo===1){
                    alert("PROYECTO REGISTRADO!");
                    
                    $scope.proyecto="";
                    $scope.listarProyectos();
                }else{
                    alert("EL PROYECTO YA SE ENCUENTRA REGISTRADO!");
                }
                
                
            });
            }else{
                alert("debe diligenciar toda la informacion");
            }
              
            
            
    };
    $scope.modificarProyecto = function (form) {
        


        if (form.$valid) {
            
            /*Se ejecuta la funcion mandando por parametro el objeto identificacion, 
             * el cual esta asociado a los input*/
            actividadServiceIntegrante.modificar($scope.proyecto).then(function (response) {
                if(response.codigo===1){
                    alert("DATOS MODIFICADOS CON EXITO!");
                    $scope.proyecto="";
                    $scope.listarProyectos();
                    
                }else{
                    alert("ERROR AL MODIFICAR LOS DATOS");
                }
            });
        } else {
            alert("debe diligenciar toda la informacion!");
        }
    };
    $scope.buscarProyecto = function (form) {
       


        if (form.$valid) {
            /*Se ejecuta la funcion mandando por parametro el objeto identificacion, 
             * el cual esta asociado a los input*/
            actividadServiceIntegrante.buscar($scope.proyecto).then(function (response) {
                /*El resultado de la promesa se recibe por parametro*/
                if(response.codigo===1){
                    
                    var obj = {
                        nombre:response.nombre,
                        inicio:new Date(response.inicio),
                        fin:new Date(response.fin),
                        etapa:response.etapa
                    };
                    
                    
                   $scope.proyecto=obj;
                    
                }else{
                    alert("NO DATA FOUND!");
                }
                
                
            });
        } else {
            alert("debe ingresar un nombre a buscar");
        }
    };
    $scope.eliminarProyecto = function (form) {
        


        if (form.$valid) {
            /*Se ejecuta la funcion mandando por parametro el objeto identificacion, 
             * el cual esta asociado a los input*/
            actividadServiceIntegrante.eliminar($scope.proyecto).then(function (response) {
                /*El resultado de la promesa se recibe por parametro*/
                if(response.codigo===1){
                    alert("EXITO");
                    $scope.proyecto="";
                    $scope.listarProyectos();
                    
                }else{
                    alert("ERROR!");
                }
                
            });
        } else {
            alert("debe ingresar un nombre a buscar!");
        }
    };
    
    
    $scope.listarActividadesIntegrante=function(){
        
      actividadServiceIntegrante.listarActividadesIntegrante().then(function(response){
          var entrada = [];
          for(var i=0;i<response.length;i++){
              entrada.push({nombre:response[i].nombre,descripcion:response[i].descripcion,inicio:new Date(response[i].inicio),fin:new Date(response[i].fin)});
          }
          $scope.listadoActividades=entrada;
          
      });
        
    };
    
      $scope.listarTareaActividad = function () {

        actividadServiceIntegrante.listTareaActividad().then(function (response) {
          var entrada = [];
          for(var i=0;i<response.length;i++){
              entrada.push({nombre:response[i].nombre,porcentaje:response[i].porcentaje,estado:response[i].estado,inicio:new Date(response[i].inicio),fin:new Date(response[i].fin)});
          }
            $scope.lTareaActividad = entrada;
            console.log(entrada);
        });
    };
    
    
    
    $scope.getSelectedRow=function(){
        $scope.selected = this.obj;
        $scope.proyecto=$scope.selected;          
        var nombre = $scope.proyecto.nombre;
        actividadServiceIntegrante.listTareaActividad(nombre).then(function (response) {
          var entrada = [];
          for(var i=0;i<response.length;i++){
              entrada.push({actividad:response[i].actividad,nombreactividad:response[i].nombreactividad,nombre:response[i].nombre,porcentaje:response[i].porcentaje,estado:response[i].estado,inicio:new Date(response[i].inicio),fin:new Date(response[i].fin)});
          }
            $scope.lTareaActividad = entrada;
            console.log(entrada);
        });

        
        
        
    };
});







