/* global angular Firebase */
(function() {
  angular.module('life-of-a-story')
    .factory("User", ["$firebaseArray", "$firebaseObject"
      function($firebaseArray, $firebaseObject) {
        // create a reference to the database location where we will store our data
        var ref = new Firebase("https://life-of-a-story.firebaseio.com/users");

        var users = $firebaseArray(ref.child('questions'));

        // this uses AngularFire to create the synchronized array
        var User = {
          all: users,
          create: function(user) {
            return users.$add(user);
          },
          get: function(uid) {
            return $firebaseObject(ref.child('questions').child(uid));
          },
          delete: function(user) {
            return users.$remove(user);
          }
        };

        return User;
      }
    ]);
})();
