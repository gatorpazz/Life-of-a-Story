/* global angular */
(function() {
  'use strict';

  angular.module('life-of-a-story', ['ui.router', 'firebase'])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');

      $stateProvider

      // HOME VIEW WITH LOGIN AND REGISTRATION
        .state('home', {
          url: '/home',
          templateUrl: 'views/home.html',
          controller: 'UserController',
          controllerAs: 'user'
        })
        .state('registration', {
          url: '/registration',
          templateUrl: 'views/registration.html'
        })
        .state('myBooks', {
          url: '/my-books',
          templateUrl: 'views/my-books.html'
        })
        .state('addBook', {
          url: '/add-a-book',
          templateUrl: 'views/addBook.html',
          controller: 'AddBookController',
          controllerAs: 'abc'
        })
        .state('my-summary', {
          url: '/my-summary',
          templateUrl: 'views/my-summary.html',
          controller: 'MySummaryController',
          controllerAs: 'sum'
        });
    });
  angular.module('life-of-a-story').constant('FIREBASE_URL', 'https://life-of-a-story.firebaseio.com/');
})();
