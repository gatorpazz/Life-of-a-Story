/* global angular */
(function(){
  'use strict';

  angular.module('life-of-a-story', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');

      $stateProvider

        // HOME VIEW WITH LOGIN AND REGISTRATION
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        });
    });
})();
