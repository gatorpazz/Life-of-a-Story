/* global angular */
(function(){
  'use strict';

  angular.module('life-of-a-story', ['ui.router', 'firebase'])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');

      $stateProvider

        // HOME VIEW WITH LOGIN AND REGISTRATION
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'loginController',
            controllerAs: 'login'
        })
        .state('registration', {
            url: '/registration',
            templateUrl: 'views/registration.html'
        });
    });
angular.module('life-of-a-story').constant('FIREBASE_URL', 'https://life-of-a-story.firebaseio.com/');
})();
