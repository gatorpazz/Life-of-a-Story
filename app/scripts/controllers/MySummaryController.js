/* global angular*/
(function() {
  'use strict';

  angular.module('life-of-a-story')
    .controller('MySummaryController', function($scope, Auth) {
      $scope.user = Auth.authStatus();
    }); // END MySummaryController
})();
