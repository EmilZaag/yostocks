'use strict';

angular.module('shared-module.services')
    .factory('industryData', ['$http','URLS', function($http, URLS) {

  
    var urlBase         = URLS.yql,
        industryData    = {};


    industryData.getIndustries = function (industrySelect) {
            // eg yqlSelectClause = URLS.select_beer_companies,
            // 
        
            return $http.get(urlBase + industrySelect);
        };

    industryData.getStocksForIndustry = function (industryTicker) {
        return $http.get(urlBase + '/' + industryTicker);
    };

    
    industryData.getStockDetail = function (StockTicker) {
        return $http.get(urlBase + '/' + StockTicker + '/orders');
    };

    return industryData;
}]);
