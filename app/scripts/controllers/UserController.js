/* global angular */
(function() {
  'use strict';

  angular.module('life-of-a-story')
    .controller('UserController', function($scope, Auth, $firebase) {

      $scope.auth = Auth.magicAuth;
      $scope.auth.$onAuth(function(authData) {
        $scope.authData = authData;
        console.log(authData);
      });
      $scope.login = function() {
        Auth.googleLogin();
      };
      $scope.checkAuth = function() {
        console.log(Auth.authStatus());
      };
      $scope.logout = function() {
        Auth.googleLogout();
      };

    }) // END MainController
})();

/*ref.child("users").child(authData.uid).set({
  provider: authData.provider,
  name: authData.google.displayName,
  image: authData.google.profileImageURL
});*/
