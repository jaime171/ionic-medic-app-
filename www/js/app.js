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
      url: '/main-menu',
      templateUrl: 'templates/main-menu.html',

    })
    .state('search-menu',{
      url: '/search-menu',
      templateUrl: 'templates/search-menu.html'
    })
    .state('detail',{
      url: '/search-menu/:aId',
      templateUrl: 'templates/detail.html',
      controller: 'MainController'
    })
    $urlRouterProvider.otherwise('city-menu');
})//Config




