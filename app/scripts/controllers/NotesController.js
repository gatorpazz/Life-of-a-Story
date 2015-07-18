/* global angular Firebase */
(function() {
  'use strict';

  angular.module('life-of-a-story')
    .controller('NotesController', function($scope, $firebase, Auth, $firebaseObject, $firebaseArray, $stateParams) {

      $scope.user = Auth.authStatus();
      var books = new Firebase('https://life-of-a-story.firebaseio.com/users/' + $scope.user.uid + '/books/');
      $scope.book = $firebaseObject(books.child($stateParams.book));
      var genNotes = new Firebase('https://life-of-a-story.firebaseio.com/users/' + $scope.user.uid + '/books/' + $stateParams.book + '/notes/genNotes/');
      var pageNotes = new Firebase('https://life-of-a-story.firebaseio.com/users/' + $scope.user.uid + '/books/' + $stateParams.book + '/notes/pageNotes/');
      var charNotes = new Firebase('https://life-of-a-story.firebaseio.com/users/' + $scope.user.uid + '/books/' + $stateParams.book + '/notes/charNotes/');
      var allNotes = new Firebase('https://life-of-a-story.firebaseio.com/users/' + $scope.user.uid + '/books/' + $stateParams.book + '/notes/allNotes/');
      $scope.genNotes = $firebaseArray(genNotes);
      $scope.pageNotes = $firebaseArray(pageNotes);
      $scope.charNotes = $firebaseArray(charNotes);
      $scope.allNotes = $firebaseArray(allNotes)
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
      $scope.addGenNote = function(note) {
        $scope.genNote.created_on = Date.now();
        $scope.genNotes.$add($scope.genNote);
        $scope.allNotes.$add($scope.genNote);
      };
      $scope.addPageNote = function() {
        $scope.pageNote.created_on = Date.now();
        $scope.pageNotes.$add($scope.pageNote);
        $scope.allNotes.$add($scope.pageNote);
      };
      $scope.addCharNote = function() {
        $scope.charNote.created_on = Date.now();
        $scope.charNotes.$add($scope.charNote);
        $scope.allNotes.$add($scope.charNote);
      };

    }); // END GameResultController
})();
