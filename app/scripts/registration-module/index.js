'use strict';

/**
 * @ngdoc overview
 * @name yoStocksApp
 * @description
 * # yoStocksApp
 *
 * Main module of the application.
 */
angular.module('registration-module',
		[
			'registration-module.controllers',
			'registration-module.services',
		])

  .run(["$rootScope", "$location", function($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
      // We can catch the error thrown when the $requireAuth promise is rejected
      // and redirect the user back to the home page
      if (error === "AUTH_REQUIRED") {
        $location.path("/login");
      }
    });
  }])

.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/scripts/registration-module/views/login.html',
        controller: 'registration-controller',
        controllerAs: 'regCtl'
      })
      .when('/register', {
        templateUrl: '/scripts/registration-module/views/register.html',
        controller: 'registration-controller',
        controllerAs: 'regCtl'
      })
      .when('/login', {
        templateUrl: '/scripts/registration-module/views/login.html',
        controller: 'registration-controller',
        controllerAs: 'regCtl'
      });

  });


