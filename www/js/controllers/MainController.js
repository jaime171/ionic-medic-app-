angular.module('starter').controller('MainController',['$scope', '$state', '$http', function($scope, $state, $http){


  




  // Asi es como si funciona pero el problema es que solo carga un json y tiene que cargar un json difente por cada ciudad.
  $http.get('js/data/data.json').success(function(data) { 
    $scope.doctorsList = data
    $scope.whichdoctor = $state.params.aId;
  });




  







  // Asi es como deberia de funcionar hacindo click para cargar el json, pero al momento de 
  // elegir un doctor me muestra todos, no es la manera correcta pero se supone que corre una funcion diferente por cada click y asi carga un json diferente.
  
// citySelectionTwo


  // $scope.citySelection = function() {
  //   mainService.success(function(data) {
  //     $scope.doctorsList = data
  //     $scope.whichdoctor = $state.params.aId;
  //   })
  // }

  // $scope.citySelectionTwo = function() {
  //   mainService.success(function(data) {
  //     $scope.doctorsList = data
  //     $scope.whichdoctor = $state.params.aId;
  //   })
  // }

  // $scope.citySelectionThree = function() {
  //   mainService.success(function(data) {
  //     $scope.doctorsList = data
  //     $scope.whichdoctor = $state.params.aId;
  //   })
  // }
  
























  // $scope.cities = {
  //   city_1: "Saltillo",
  //   city_2: "Guanajuato",
  //   city_3: "Leon"
  // }

  // $scope.options = {
  //   option_1: "Buscar",
  //   option_2: "Directorio"
  // }

  $scope.doctors = [
    saltilloDocList = [
      {
        id: "DR_Simental",
        nombre: "Jaime Simental Saltillo",
        direccion: "Abasolo 997",
        telefono: "8444847999",
        pareja: "Iliana Mellado"
      },
      {
        id: "DR_Mellado",
        nombre: "Iliana Mellado Goerne",
        direccion: "Privada Lourdes 550",
        telefono: "8442048200",
        pareja: "Jaime Martinez"
      } 
    ],
    guanajuatoDocList = [
      {
        nombre: "Jaime Simental Guanajuato",
        direccion: "Abasolo 997",
        telefono: "8444847999",
        pareja: "Iliana Mellado"
      },
      {
        nombre: "Iliana Mellado Goerne",
        direccion: "Privada Lourdes 550",
        telefono: "8442048200",
        pareja: "Jaime Martinez" 
      } 
    ],
    leonDocList = [
      {
        nombre: "Jaime Simental Leon",
        direccion: "Abasolo 997",
        telefono: "8444847999",
        pareja: "Iliana Mellado"
      },
      {
        nombre: "Iliana Mellado Goerne",
        direccion: "Privada Lourdes 550",
        telefono: "8442048200",
        pareja: "Jaime Martinez"
      } 
    ]  
  ]











}]);