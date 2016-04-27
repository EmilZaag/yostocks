'use strict';
angular.module('shared-module.filters')

// appl the filter like this
// <a ng-href="#/foos/{{foo.id | encodeURIComponent}}">{{foo.name}}</a>
// 
// 
//  THIS FILTER IS CURRENTLY NOT USED
//  URL ENCODING IS ACHIEVED USING AN INTERCEPTION IN APP.JS 
.filter('encodeURI', function($window) {
    return function (x){ 
    	return $window.encodeURIComponent(x);
	};
})

.filter('decodeURI', function($window) {
    return $window.decodeURIComponent;
})

.filter('encodeUri', function() { return function(x) {
return encodeURIComponent(x); };
});