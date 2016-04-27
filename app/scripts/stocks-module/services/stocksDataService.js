'use strict';

function stockNews($rootScope, $http, URLS) {
    var urlBase                 = URLS.yql, 
        selectCompanyNewsPrefix = URLS.selectCompanyNewsPrefix,
        selectCompanyNewsSuffix = URLS.selectCompanyNewsSuffix,
        stockNews               = {};


        // this will hold the news array
        stockNews.newsItems = '';

        stockNews.setStock = function(stock){
            var yqlQuery = urlBase + selectCompanyNewsPrefix + stock.symbol + selectCompanyNewsSuffix;
            var promise =  $http.get(yqlQuery);

            promise.then(function (response) {
                // return the news
                stockNews.newsItems = response.data.query.results.a;
                stockNews.broadcastNews();  

                //console.log(stockNews.newsItems) ; 

             }, function (error) {
                console.log('Unable to load news: ' + error.message);

             });
         };
         stockNews.broadcastNews = function(){
            $rootScope.$broadcast('updatedstockNews');
         };

    return stockNews;
}


angular.module('stocks-module.services')
    .factory('stockNews', ['$rootScope','$http','URLS', stockNews]);
