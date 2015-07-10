/* global angular */
(function() {
  'use strict';

  angular.module('life-of-a-story')
    .controller('loginController', function($scope, $firebaseAuth) {
      var ref = new Firebase('https://life-of-a-story.firebaseio.com/');
      // create an instance of the authentication service
      var auth = $firebaseAuth(ref);
      // login with Google
      this.login = function() {
        auth.$authWithOAuthPopup("google").then(function(authData) {
          console.log("Logged in as:", authData.uid);
        }).catch(function(error) {
          console.log("Authentication failed:", error);
        });
      };
    });
})();
