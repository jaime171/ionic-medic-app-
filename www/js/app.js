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
      controller: ['$scope','$stateParams','$state', function($scope, $stateParams, $state){
        $scope.idCity = $stateParams.idCity;
        $scope.search = function(){
          $state.go('search-menu', {idCity: $scope.idCity})
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
      templateUrl: 'templates/directory-menu.html'
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
      }],
      templateUrl: 'templates/detail.html'
    })
    $urlRouterProvider.otherwise('/city-menu');
})//Config




