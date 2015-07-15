/* global angular Firebase */
(function() {
  'use strict';

  angular.module('life-of-a-story')
    .controller('AddBookController', function($scope, Auth, $firebase, $http, $firebaseArray) {
      $scope.user = Auth.authStatus();
      var ref = new Firebase('https://life-of-a-story.firebaseio.com/users/' + $scope.user.uid + '/books');
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
      $scope.searchBooks = function() {
        $http.get('https://www.googleapis.com/books/v1/volumes?q=++intitle:' + $scope.query.title + '+inauthor:' + $scope.query.author + '&access_token=' + $scope.user.google.accessToken)
          .then(function(response) {
            $scope.books = response.data;
          });
      };
      $scope.specificSearchBooks = function() {
        $http.get('https://www.googleapis.com/books/v1/volumes?q=+isbn:' + $scope.specificQuery.isbn + '&access_token=' + $scope.user.google.accessToken)
        .then(function(response) {
          $scope.books = response.data;
        });
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
