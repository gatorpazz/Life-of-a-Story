/* global angular Firebase */
(function() {
  'use strict';

  angular.module('life-of-a-story')
    .controller('NotesController', function($scope, $firebase, Auth, $firebaseObject, $firebaseArray, $stateParams) {

      $scope.user = Auth.authStatus();
      var books = new Firebase('https://life-of-a-story.firebaseio.com/users/' + $scope.user.uid + '/books/');
      $scope.book = $firebaseObject(books.child($stateParams.book));
      var notes = new Firebase('https://life-of-a-story.firebaseio.com/users/' + $scope.user.uid + '/books/' + $stateParams.book + '/notes/');
      $scope.notes = $firebaseArray(notes)
      console.log($scope.notes);
      $scope.button = null;
      $scope.genNote = {
        'title': null,
        'body': null,
        'created_on': null,
        'gen': 'gen'
      };
      $scope.pageNote = {
        'title': null,
        'page': null,
        'body': null,
        'created_on': null,
        'pag': 'pag'
      };
      $scope.charNote = {
        'character': null,
        'body': null,
        'created_on': null,
        'char': 'char'
      };
      $scope.openNoteForm = function(value) {
        $scope.button = value;
      };
      $scope.tab = 1;
      $scope.openNotes = function(tab) {
        $scope.tab = tab;
      };
      $scope.addGenNote = function() {
        $scope.genNote.created_on = Date.now();
        $scope.notes.$add($scope.genNote);
      };
      $scope.addPageNote = function() {
        $scope.pageNote.created_on = Date.now();
        $scope.notes.$add($scope.pageNote);
      };
      $scope.addCharNote = function() {
        $scope.charNote.created_on = Date.now();
        $scope.notes.$add($scope.charNote);
      };
      $scope.deleteNote = function(note) {
        $scope.notes.$remove(note);
      };

    }); // END GameResultController
})();
