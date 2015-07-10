/* global angular Firebase */
(function() {
  'use strict';
  angular.module('life-of-a-story')
    .factory("Auth", ["$firebaseAuth",
      function($firebaseAuth) {
        var ref = new Firebase("https://docs-sandbox.firebaseio.com");
        return $firebaseAuth(ref);
      }
    ]);
})();
