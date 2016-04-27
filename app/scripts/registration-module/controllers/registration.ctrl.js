'use strict';

/**
 * @ngdoc function
 * @name registration-module.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the registration-module
 */
angular.module('registration-module.controllers')

.controller('registration-controller', ['$location', 'Authentication', '$rootScope',
  function($location, Authentication, $rootScope) {

    var self = this;
    self.message = "Welcome to myStocks!";

    // var ref = new Firebase(FIREBASE_URL); // Get a handle to the firebase database
    // var auth = $firebaseAuth(ref); // The firebase authentication object for this database

    self.signup = function() {
      var result = Authentication.signup(self.user);
      console.log(result);
    };


    self.login = function() {
      Authentication.login(self.user);
    };

    self.logout = function() {
      Authentication.logout();
    };
  }
]); // controller
