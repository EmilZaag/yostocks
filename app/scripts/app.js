'use strict';

/**
 * @ngdoc overview
 * @name yoStocksApp
 * @description
 * # yoStocksApp
 *
 * Main module of the application.
 */
angular
  .module('yoStocksApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'firebase',
      'shared-module',
      'industries-module',
      'stocks-module',
      'registration-module'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
