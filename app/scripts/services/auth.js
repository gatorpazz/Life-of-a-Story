/* global angular Firebase */
(function() {
    'use strict';
    angular.module('life-of-a-story')
      .factory('Auth', function($firebase, FIREBASE_URL, $rootScope) {
          var myFirebaseRef = new Firebase("FIREBASE_URL");

          var Auth = {
            register: function(user) {
              return ref.createUser(user.email, user.password);
            },
            login: function(user) {
              return auth.$login('password', user);
            },
            logout: function() {
              auth.$logout();
            },
            resolveUser: function() {
              return auth.$getCurrentUser();
            },
            signedIn: function() {
              return !!Auth.user.provider;
            },
            user: {}
          };
        }
      })();
