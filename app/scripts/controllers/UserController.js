/* global angular Firebase */
(function() {
  'use strict';

  angular.module('life-of-a-story')
    .controller('UserController', function($scope, Auth, $state) {
      var ref = new Firebase('https://life-of-a-story.firebaseio.com/');
      // create an instance of the authentication service
      $state.go('home');
      $scope.auth = Auth.magicAuth;
      $scope.authData = $scope.auth.$onAuth(function(authData) {
        return;
      })
      $scope.addUser = function() {
        $scope.auth.$onAuth(function(authData) {
          $scope.authData = authData;
          if (authData) {
            ref.child('users').child(authData.uid).update({
              provider: authData.provider,
              name: authData.google.displayName,
              image: authData.google.profileImageURL
            });
            $state.go('my-summary');
          }
        });
      }; // END addUser method
      $scope.login = function() {
        Auth.googleLogin();
      };
      $scope.checkAuth = function() {
        console.log(Auth.authStatus());
      };
      $scope.logout = function() {
        Auth.googleLogout();
      };

    }); // END UserController
})();

/*ref.child("users").child(authData.uid).set({
  provider: authData.provider,
  name: authData.google.displayName,
  image: authData.google.profileImageURL
});*/
