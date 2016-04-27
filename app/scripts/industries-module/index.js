'use strict';

/**
 * @ngdoc overview
 * @name yoStocksApp
 * @description
 * # yoStocksApp
 *
 * Main module of the application.
 */
angular.module('industries-module',
		[
			'industries-module.controllers',
			'industries-module.directives',
			'industries-module.filters'
		])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/industries', {
        templateUrl: '/scripts/industries-module/views/industries-list.html',
        controller: 'industries-controller',
        controllerAs: 'about'
      });
  });


