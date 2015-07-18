/* global angular Firebase */
(function() {
  'use strict';

  angular.module('life-of-a-story')
    .controller('NotesController', function($scope, $firebase, Auth, $firebaseObject, $firebaseArray, $stateParams) {

      $scope.user = Auth.authStatus();
      var books = new Firebase('https://life-of-a-story.firebaseio.com/users/' + $scope.user.uid + '/books/');
      $scope.book = $firebaseObject(books.child($stateParams.book));
      var notes = new Firebase('https://life-of-a-story.firebaseio.com/users/' + $scope.user.uid + '/books/' + $stateParams.book + '/notes/');
      $scope.notes = $firebaseArray(notes);
      $scope.button = null;
      $scope.genNote = {
        'title': null,
        'body': null,
        'created_on': null
      };
      $scope.pageNote = {
        'title': null,
        'page': null,
        'body': null,
        'created_on': null
      };
      $scope.charNote = {
        'character': null,
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
      $scope.addNote = function(note) {
        $scope.genNote.created_on = Date.now();
        $scope.pageNote.created_on = Date.now();
        $scope.charNote.created_on = Date.now();
        $scope.notes.$add(note);
      };

    }); // END GameResultController
})();
