/* global angular Firebase */
(function() {
  'use strict';

  angular.module('life-of-a-story')
    .controller('AddBookController', function($scope, Auth, $firebase, $http, $firebaseArray, $state) {
      $scope.user = Auth.authStatus();
      if($scope.user == null) {
        $state.go('home');
      };
      var ref = new Firebase('https://life-of-a-story.firebaseio.com/users/' + $scope.user.uid + '/books');
      var baseSearchUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
      $scope.userBooks = $firebaseArray(ref);
      console.log($scope.user);
      $scope.query = {
        'title': '',
        'author': ''
      };
      $scope.specificQuery = {
        'isbn': ''
      };
      $scope.confirm = {};
      $scope.books = [];
      $scope.errorMessage = null;
      $scope.searchBooks = function() {
        if ($scope.query.author === '' && $scope.query.title === '') {
          $scope.books = [];
          $scope.errorMessage = 'Woops! You did not search for anything!';
        } else if ($scope.query.author === '') {
          $http.get(baseSearchUrl + '+intitle:' + $scope.query.title + '&access_token=' + $scope.user.google.accessToken)
            .then(function(response) {
              $scope.books = response.data;
              $scope.errorMessage = null;
            });
        } else if ($scope.query.title === '') {
          $http.get(baseSearchUrl + '+inauthor:' + $scope.query.author + '&access_token=' + $scope.user.google.accessToken)
            .then(function(response) {
              $scope.books = response.data;
              $scope.errorMessage = null;
            });
        } else {
          $http.get(baseSearchUrl + '+intitle:' + $scope.query.title + '+inauthor:' + $scope.query.author + '&access_token=' + $scope.user.google.accessToken)
            .then(function(response) {
              $scope.books = response.data;
              $scope.errorMessage = null;
            });
        }
      };
      $scope.specificSearchBooks = function() {
        if ($scope.specificQuery.isbn === '') {
          $scope.books = [];
          $scope.errorMessage = 'Woops! You did not search for anything!';
        } else {
          $http.get('https://www.googleapis.com/books/v1/volumes?q=+isbn:' + $scope.specificQuery.isbn + '&access_token=' + $scope.user.google.accessToken)
            .then(function(response) {
              $scope.books = response.data;
              $scope.errorMessage = null;
            });
        }
      };
      $scope.selectBook = function(book) {
        $scope.confirm = book;
        console.log($scope.confirm);
        return $scope.confirm;
      };
      $scope.confirmBook = function() {
        $scope.userBooks.$add($scope.confirm);
      };
    });
})();
