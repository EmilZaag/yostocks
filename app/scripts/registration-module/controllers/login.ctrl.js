'use strict';

/**
 * @ngdoc function
 * @name login-module.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the login-module
 */

angular.module('registration-module.controllers')
.controller('login-controller', ['$scope', '$location', function($scope, $location) {

  $scope.message = "Welcome to myStocks!";
  $scope.login = function() {
    $scope.message = $scope.user.email + ' you are logged in';
    $location.url('/stocks');
  };

}]);
