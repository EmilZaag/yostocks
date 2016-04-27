'use strict';

/**
 * @ngdoc function
 * @name stocks-module.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stocks-module  ,currentAuth
 */
angular.module('stocks-module.controllers')

			  .controller('stocks-controller', function ($scope, stockNews) {

             // stockNews.broadcastNews = function(){
             //    $rootScope.$broadcast('updated stockNews');
             // };

            $scope.$on('updatedstockNews', function() {
                  $scope.newsItems = stockNews.newsItems;

              });

			  });
