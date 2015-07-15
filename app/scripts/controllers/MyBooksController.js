/* global angular */
(function() {
  'use strict';

  angular.module('life-of-a-story')
    .controller('MyBooksController', function($scope, Auth, $firebaseArray) {
      $scope.user = Auth.authStatus();
      var ref = new Firebase('https://life-of-a-story.firebaseio.com/users/' + $scope.user.uid + '/books');
      $scope.userBooks = $firebaseArray(ref);
    }); // END MySummaryController
})();
