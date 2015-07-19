/* global angular*/
(function() {
  'use strict';

  angular.module('life-of-a-story')
    .controller('HomeController', function($scope, Auth, $state) {
      $scope.user = Auth.authStatus();
      console.log($scope.user);
      if($scope.user != null) {
        $state.go('my-summary');
      };
    }); // END MySummaryController
})();
