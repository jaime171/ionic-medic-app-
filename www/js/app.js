// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('starter', ['ionic', 'ngCordova'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    // console.log(window.Connection);
    // if (window.Connection) {
    //   if (navigator.connection.type == Connection.NONE) {
    //     ionicPopup.confirm({
    //       title: "Internet is not working",
    //       content: "Internet is not working on your device."
    //     });
    //   }
    // }

    console.log(JSON.stringify(window.navigator))
    // if(window.Connection) {
    //   if(navigator.connection.type == Connection.NONE) {
    //     alert("There is no internet connection");
    //   }
    // }
    // console.log(navigator.connection.type)
    // if(window.Connection) {
    //   console.log("Conection");
    // }
  });
})


.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider){
  $ionicConfigProvider.backButton.previousTitleText(false).text('');
  $stateProvider
    .state('city-menu',{
      url: '/city-menu',
      templateUrl: 'templates/city-menu.html'
    })




    .state('main-menu',{
      url: '/main-menu/:idCity',
      resolve: { 
        doctores: ['$stateParams','doctoresService', function($stateParams, doctoresService){
          var id = $stateParams.idCity;
          doctoresService.setListDoc(doctoresService.getDoctoresByCity(id));
          // console.log(doctoresService.getDoctoresByCity(id))
        }]
      },
      controller: ['$scope','$stateParams','$state', function($scope, $stateParams, $state){
        $scope.idCity = $stateParams.idCity;
        $scope.search = function(){
          $state.go('search-menu', {idCity: $scope.idCity})
          //$state.go('search-menu')
        }
        $scope.directory = function(){
          $state.go('directory-menu', {idCity: $scope.idCity})
        }
      }],
      templateUrl: 'templates/main-menu.html'
    })


    .state('search-menu',{
      url: '/search-menu/:idCity',
      resolve: { 
        doctores: ['$stateParams','doctoresService', function($stateParams, doctoresService){
          var id = $stateParams.idCity;
          return doctoresService.getDoctoresByCity(id);
        }]
      },
      controller: ['$scope','doctores', '$state', function($scope, doctores, $state){
        $scope.doctorsList = doctores;
        $scope.showDoc = function(id){
          $state.go('detail', {idDoc: id})
        }
      }],
      templateUrl: 'templates/search-menu.html'
    })










    .state('directory-menu', {
      url: '/directory-menu/:idCity',
      controller:  ['$scope', '$state', '$stateParams', 'doctoresService',function($scope, $state, $stateParams, doctoresService){
        $scope.search=function(idSpecialty){
          $state.go('directory-specialty', {idCity: $stateParams.idCity, idSpecialty: idSpecialty})
        }
        var id = $stateParams.idCity;
        doctoresService.setListDoc(doctoresService.getDoctoresByCity(id));
        console.log(doctoresService.getDoctoresByCity(id))
        // console.log($scope.test);
      }],
      templateUrl: 'templates/directory-menu.html'
    })










    .state('directory-specialty',{
      url: '/directory-specialty/:idCity/:idSpecialty',
      controller: ['$scope','doctoresService','$stateParams', '$state', function($scope, doctoresService,$stateParams, $state){
        var idCity = $stateParams.idCity;
        var idSpecialty = $stateParams.idSpecialty;
        $scope.doctorsList = doctoresService.getDoctoresBySpecialty(idCity, idSpecialty)
        $scope.showDoc = function(id){
          $state.go('detail', {idDoc: id})
        }
      }],
      templateUrl: 'templates/search-menu.html'
    })














    .state('detail', {
      url: '/detail/:idDoc',
      resolve: { 
        infoDoc: ['$stateParams','doctoresService', function($stateParams, doctoresService){
          var id = $stateParams.idDoc;
          return doctoresService.getDoctorById(id);
        }]
      },
      controller: ['$scope','infoDoc', '$rootScope', '$cordovaNetwork', function($scope, infoDoc, $rootScope, $cordovaNetwork){
        $scope.doc = infoDoc;
        function initMap() {
                var map = new google.maps.Map(document.getElementById('map'), {
                  zoom: 16,
                  scrollwheel: false,
                  disableDefaultUI: true
                });
                var geocoder = new google.maps.Geocoder();
                geocodeAddress(geocoder, map);
              };
              function geocodeAddress(geocoder, resultsMap) {
                var address = $scope.doc.direccion;
                geocoder.geocode({'address': address}, function(results, status) {
                  if (status === google.maps.GeocoderStatus.OK) {
                  resultsMap.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                      map: resultsMap,
                      position: results[0].geometry.location
                    });
                  } 
                });
              }
              initMap();
          // document.addEventListener("deviceready", onDeviceReady, false);
          // function onDeviceReady() {
          //     checkConnection();
          // }
          // function checkConnection() {
          //   if(navigator.connection.type==0) {
          //     // alert("Offline");
          //   }
          //   else if(navigator.connection.type=='none') {
          //     // alert("Offline");
          //   }
          //   else {
              
          //     }  // else
          //   } // main function
      }],
      templateUrl: 'templates/detail.html'
    })
    
    $urlRouterProvider.otherwise('/city-menu');
})//Config




