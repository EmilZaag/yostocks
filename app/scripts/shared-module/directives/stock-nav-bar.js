'use strict';

angular.module('shared-module.directives')

.controller('stockNavBarController', ['$scope', 'industryData', 'stockNews', 'URLS', '$location', 'Authentication',
  function($scope, industryData, stockNews, URLS, $location, Authentication) {

    $scope.industries = '';
    $scope.status = '';
    $scope.placeholder = 'enter a stock ticker';

    $scope.focus = function() {
      $scope.focusThis = "true";
    };

    $scope.logout = function() {
      Authentication.logout();
    };

    (function getIndustries() {

      var yqlQuery = URLS.selectCompaniesPrefix + '851' + URLS.selectCompaniesSuffix;

      industryData.getIndustries(yqlQuery)
        .then(function(response) {
          // for the dropdown
          $scope.items = response.data.query.results.industry.company;

        }, function(error) {
          $scope.status = 'Unable to load industry data: ' + error.message;
        });
    })();

    // we have auto submitted the stock selection from the typeahead field in the
    // nav bar.. now we want to pass it to the stock service and select the stock news
    // which should be displayed on the stock screen
    $scope.onSelect = function($item, $model, $label) {
      $scope.$selection_made = $item;

      // now update the stock instance with the selected stock
      // this should ripple through to the stock screen
      //setChosenStock($item);
      stockNews.setStock($item);
      $location.url('/stocks');
    };


  }
])

.directive('stockNavBar', function() {
  // navigation bar with inherited scope - to be refactored to contain functionality
  //
  return {
    restrict: 'E',
    controller: 'stockNavBarController',
    templateUrl: '/scripts/shared-module/directives/templates/shared-navbar.html'

  };
});