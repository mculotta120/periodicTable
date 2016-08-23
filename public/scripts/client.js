console.log("client.js is sourced");
//create an ng app for the page
var myApp = angular.module( 'myApp', [] );
//create a controller
myApp.controller('sampleController', [ '$scope', function( $scope ){

  $scope.callElement = function( element ){
    console.log("click");
    console.log( element );
  };
}]);
