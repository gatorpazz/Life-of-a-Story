/* global angular */
(function() {
  'use strict';

  angular.module('life-of-a-story')
    .controller('UserController', function($scope, Auth, $firebase) {
      var ref = new Firebase('https://life-of-a-story.firebaseio.com/');
      // create an instance of the authentication service
      $scope.auth = Auth.magicAuth;
      $scope.auth.$onAuth(function(authData) {
        $scope.authData = authData;
        ref.child("users").child(authData.uid).set({
          provider: authData.provider,
          name: authData.google.displayName,
          image: authData.google.profileImageURL
        });
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

    }) // END UserController
})();

/*ref.child("users").child(authData.uid).set({
  provider: authData.provider,
  name: authData.google.displayName,
  image: authData.google.profileImageURL
});*/
