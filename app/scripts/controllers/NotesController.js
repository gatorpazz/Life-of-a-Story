/* global angular Firebase */
(function(){
  'use strict';

  angular.module('life-of-a-story')
    .controller('NotesController', function ($scope, $firebase, Auth, $firebaseObject, $stateParams){

      $scope.user = Auth.authStatus();
      var books = new Firebase('https://life-of-a-story.firebaseio.com/users/' + $scope.user.uid + '/books/');
      $scope.book = $firebaseObject(books.child($stateParams.book));
      console.log($scope.result);

    }); // END GameResultController
})();
