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
      $scope.searchBooks = function() {
        $http.get('https://www.googleapis.com/books/v1/volumes?q=' + $scope.query.title + '+inauthor:' + $scope.query.author + '&key=' + $scope.user.token)
          .then(function(response) {
            console.log(response.data);
          })
      };
      var self = this;
      this.books = [];
        $http.get("/api/sampledata/hyperion.json")
          .then(function(response) {
          console.log(response.data);
          self.books = response.data;
        });
    });
})();
