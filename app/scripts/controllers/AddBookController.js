/* global angular */
(function() {
  'use strict';

  angular.module('life-of-a-story')
    .controller('AddBookController', function($scope, Auth, $firebase, $http) {
      var self = this;
      this.books = [];
        $http.get("/api/sampledata/hyperion.json")
          .then(function(response) {
          console.log(response.data);
          self.books = response.data;
        });
    });
})();
