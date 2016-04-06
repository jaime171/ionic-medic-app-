// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])


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
          console.log(doctoresService.getDoctoresByCity(id))
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
      controller:  ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams){
        $scope.search=function(idSpecialty){
          $state.go('directory-specialty', {idCity: $stateParams.idCity, idSpecialty: idSpecialty})
        }
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
      controller: ['$scope','infoDoc', function($scope, infoDoc){
        $scope.doc = infoDoc;
        

        // By Direction  
        // 
        function initMap() {
          
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            zoom: 16,
            scrollwheel: false,
            disableDefaultUI: true
          });
          var geocoder = new google.maps.Geocoder();

          geocodeAddress(geocoder, map);
          
        };
  

        function geocodeAddress(geocoder, resultsMap) {
          var address = 'Blvd. Venustiano Carranza 4036, Virreyes Residencial, 25230 Saltillo, COL'
          geocoder.geocode({'address': address}, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
              resultsMap.setCenter(results[0].geometry.location);
              var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
              });
            } else {
              alert('Geocode was not successful for the following reason: ' + status);
            }
          });
        }
           
        initMap();








        
        // Geolocation
        // 
        // function initMap() {
        //   var map = new google.maps.Map(document.getElementById('map'), {
        //     center: {lat: -34.397, lng: 150.644},
        //     zoom: 16,
        //     scrollwheel: false,
        //     disableDefaultUI: true
        //   });
        //   var infoWindow = new google.maps.InfoWindow({map: map});

        //   if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(function(position) {
        //       var pos = {
        //         lat: position.coords.latitude,
        //         lng: position.coords.longitude
        //       };

        //       infoWindow.setPosition(pos);
        //       infoWindow.setContent('Hospital La conchita');
        //       map.setCenter(pos);
        //     }, function() {
        //       handleLocationError(true, infoWindow, map.getCenter());
        //     });
        //   } else {
        //     // Browser doesn't support Geolocation
        //     handleLocationError(false, infoWindow, map.getCenter());
        //   }
        // }

        // function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        //   infoWindow.setPosition(pos);
        //   infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
        // }
        // initMap();
        // 

      }],
      templateUrl: 'templates/detail.html'
    })
    
    $urlRouterProvider.otherwise('/city-menu');
})//Config




