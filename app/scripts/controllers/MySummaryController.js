/* global angular */
(function() {
  angular.module('life-of-a-story')
    .controller('MySummaryController', function($scope, Auth, $firebase) {
      var ref = new Firebase('https://life-of-a-story.firebaseio.com/');
      $scope.user=Auth.authStatus();
    }) // END MySummaryController
})();
