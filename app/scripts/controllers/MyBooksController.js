/* global angular Firebase */
(function() {
  'use strict';

  angular.module('life-of-a-story')
    .controller('MyBooksController', function($scope, Auth, $firebaseArray, $state) {
      $scope.user = Auth.authStatus();
      if($scope.user == null) {
        $state.go('home');
      }
      var ref = new Firebase('https://life-of-a-story.firebaseio.com/users/' + $scope.user.uid + '/books');
      $scope.userBooks = $firebaseArray(ref);
      $scope.deleteBook = function(book) {
        $scope.userBooks.$remove(book);
      };
    }); // END MySummaryController
})();
