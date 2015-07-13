/* global angular Firebase */
(function() {
  'use strict';
  angular.module('life-of-a-story')
   // authenticate users
   .factory('Auth', function($firebaseAuth){
     var ref = new Firebase('https://life-of-a-story.firebaseio.com');
     return {
       magicAuth: $firebaseAuth(ref),
       googleLogin: function(){
         ref.authWithOAuthPopup('google', function(){
           console.log('hello');
         }, {remember: 'sessionOnly'});
       },
       authStatus: function(){
         return ref.getAuth();
       },
       ghLogout: function(){
         ref.unauth();
         console.log('goodbye');
       }
     }; // END Auth return
   }); // END Auth factory
})();
