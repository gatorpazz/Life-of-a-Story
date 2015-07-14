/* global angular */
(function() {
  'use strict';

  angular.module('life-of-a-story')
    .controller('AddBookController', function($scope, Auth, $firebase, $http) {
      $scope.user = Auth.authStatus();
      $scope.query = {
        'title': '',
        'author': ''
      };
      $scope.confirm = {};
      $scope.books = [];
      $scope.searchBooks = function() {
        $http.get('https://www.googleapis.com/books/v1/volumes?q=' + $scope.query.title + '+inauthor:' + $scope.query.author + '&access_token=' + $scope.user.google.accessToken)
          .then(function(response) {
            $scope.books = response.data;
          })
      };
      $scope.confirmBook = function(isbn) {
        $http.get('https://www.googleapis.com/books/v1/volumes?q=+isbn:' + isbn + '&access_token=' + $scope.user.google.accessToken)
          .then(function(response) {
            $scope.confirm = response.data;
            console.log($scope.confirm);
          })
      }
    });
})();
