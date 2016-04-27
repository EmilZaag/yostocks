'use strict';

/**
 * @ngdoc function
 * @name shared-module.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shared module
 */
angular.module('shared-module.controllers')
.controller('shared-module.main.controller', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
