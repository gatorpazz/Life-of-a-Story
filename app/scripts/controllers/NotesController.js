/* global angular Firebase */
(function() {
  'use strict';

  angular.module('life-of-a-story')
    .controller('NotesController', function($scope, $firebase, Auth, $firebaseObject, $firebaseArray, $stateParams, $http, $state) {

      $scope.user = Auth.authStatus();
      var books = new Firebase('https://life-of-a-story.firebaseio.com/users/' + $scope.user.uid + '/books/');
      $scope.books = $firebaseArray(books);
      $scope.book = $firebaseObject(books.child($stateParams.book));
      var notes = new Firebase('https://life-of-a-story.firebaseio.com/users/' + $scope.user.uid + '/books/' + $stateParams.book + '/notes/');
      $scope.notes = $firebaseArray(notes);
      $scope.button = null;
      $scope.note = {
        /*eslint camelcase: 0*/
        'title': null,
        'character': null,
        'page': null,
        'body': null,
        'created_on': null
      };
      $scope.openNoteForm = function(value) {
        $scope.button = value;
      };
      $scope.tab = 1;
      $scope.openNotes = function(tab) {
        $scope.tab = tab;
      };
      $scope.addNote = function() {
        $scope.note.created_on = Date.now();
        $scope.notes.$add($scope.note);
        $scope.note = {
          'title': null,
          'character': null,
          'page': null,
          'body': null,
          'created_on': null
        };
        $scope.button = null;
      };
      $scope.deleteNote = function(note) {
        $scope.notes.$remove(note);
      };
      $scope.deleteBook = function() {
        $http.delete('https://life-of-a-story.firebaseio.com/users/' + $scope.user.uid + '/books/' + $stateParams.book + '.json')
          .then(function() {
            $state.go('myBooks')
          });
      };

    }); // END GameResultController
})();
