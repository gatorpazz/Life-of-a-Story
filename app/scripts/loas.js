/* global angular */
(function() {
  'use strict';

  angular.module('life-of-a-story', ['ui.router', 'firebase', 'restangular', 'ngAnimate'])
    .config(function($stateProvider) {


      $stateProvider

      // HOME VIEW WITH LOGIN
        .state('home', {
          url: '/home',
          templateUrl: 'views/home.html',
          controller: 'HomeController',
          controllerAs: 'home'
        })
        .state('registration', {
          url: '/registration',
          templateUrl: 'views/registration.html'
        })
        .state('myBooks', {
          url: '/my-books',
          templateUrl: 'views/my-books.html',
          controller: 'MyBooksController',
          controllerAs: 'myBook'
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
        })
        .state('individualBook', {
          url: '/:book',
          templateUrl: 'views/singleBook.html',
          controller: 'NotesController',
          controllerAs: 'note'
        });
    })
  .config(function(RestangularProvider) {
    //set the base url for api calls on our RESTful services
    RestangularProvider.setBaseUrl('https://www.googleapis.com/books/v1/volumes');
  });
})();
