/* global angular */
(function() {
  'use strict';

  angular.module('life-of-a-story')
    .controller('UserController', function($scope, $firebaseAuth) {
      var ref = new Firebase('https://life-of-a-story.firebaseio.com/');
      // create an instance of the authentication service
      var auth = $firebaseAuth(ref);
      // login with Google
      this.login = function() {
        auth.$authWithOAuthPopup("google").then(function(authData) {
          console.log(authData);
          ref.onAuth(function(authData) {
            if (authData) {
              // save the user's profile into the database so we can list users,
              // use them in Security and Firebase Rules, and show profiles
              ref.child("users").child(authData.uid).set({
                provider: authData.provider,
                name: authData.google.displayName,
                image: authData.google.profileImageURL
              });
            }
          });
        }).catch(function(error) {
          console.log("Authentication failed:", error);
        });
      };
    });
})();
