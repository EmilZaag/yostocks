 'use strict';

 angular.module('shared-module.directives').directive('bootgrid', function(URLS){

        // Angularjs wrapper for the jQuery bootgrid widget 
           
        return {

          restrict: 'EA',

          link: function(scope, element, attrs) {

                      element.bootgrid({
                          ajax: true,
                          post: function ()
                              {
                                  /* To accumulate custom parameter with the request object */
                                  return {
                                      id: "b0df282a-0d67-40e5-8558-c9e93b7befed"
                                  };
                              },
                            url: URLS.selectCompanies,
                            formatters: {
                                "link": function(column, row)
                                {
                                    return "<a href=\"#\">" + column.id + ": " + row.id + "</a>";
                                }
                            }
                      });

                  }

                  // controller: function($scope, industryData, URLS) {
                  //     $scope.industries = '';
                  //     $scope.status = '';

                  //       (function getIndustries() {
                  //           industryData.getIndustries(URLS.selectCompanies)
                  //               .then(function (response) {
                  //                 $scope.industries = response.data.query.results.industry.company;
                                    

                  //                   //console.log($scope.industries);

                  //               }, function (error) {
                  //                   $scope.status = 'Unable to load industry data: ' + error.message;
                  //               });
                  //       })();


                  //} //controller
        };

});



    //  <div class="container">
    //   <knob fg-color="red" 
    //         ng-model="rating"
    //         step='5'  
    //         max='60'
    //         />
    //         <input type="text"  value="" ng-model="rating"> 
    // </div>


 //  .directive('knob', function () {
    
 //    // object block to configure the directive
 //    // Directive definition object : DDO 
 //    return {
 //      scope: {},                                                          // makes no difference to isolate scope. 
 //      restrict: 'E',                                                      // restrict to an element 
 //      require: 'ngModel',                                                 // require the ngModel directive on the knob element
 //      link: function (scope, element, attrs, ngModel) {                   // note : 4th parameter is the ngModel directive (ie NgModelController)
       
 //                element.knob({                                            // this function is dictated by the knob Jquery hooks
 //                      min:  attrs.min,                                    // ie Jquery expects $(".dial").knob();
 //                      max:  attrs.max,                                    // in other words the function knob() on "the selected element"
 //                      step: attrs.step,
 //                      skin: 'tron',
 //                      fgColor:attrs.fgColor,  
 //                      change: function(value) {                           // see header for jquery notes
 //                                scope.$apply(function(){
 //                                  ngModel.$setViewValue(value);
 //                                });
 //                      }                
 //                    });

 //                    ngModel.$render = function(){                         // we need to render the knob on value change 
 //                      element.val(ngModel.$viewValue).trigger('change');  // in the textbox if any
 //                    };

 //            }
 //    }; //return
 // }) // directive knob



