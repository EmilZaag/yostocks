'use strict';


angular.module('stocks-module', [
  'stocks-module.directives',
  'stocks-module.controllers',
  'stocks-module.filters',
  'stocks-module.services',
])

.config(function($routeProvider) {
  $routeProvider
    .when('/stocks', {
      templateUrl: '/scripts/stocks-module/views/stocks-list.html',
      controller: 'stocks-controller',
      controllerAs: 'main'
      // ,
      // resolve: {
      //   // controller will not be loaded until $requireAuth resolves
      //   // Auth refers to our $firebaseAuth wrapper in the example above
      //   "currentAuth": ["AuthenticationService", function(AuthenticationService) {
      //     // $requireAuth returns a promise so the resolve waits for it to complete
      //     // If the promise is rejected, it will throw a $stateChangeError (see above)
      //     return AuthenticationService.$requireAuth();
      //   }]
      // }
    });
});
