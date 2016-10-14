// remove cdn for angular in html
var app = angular.module('anglifyEdit', ['ngAnimate']);

// note to remove jQuery from application
app.factory('$', ['$window', function($window){
  return $window.$;
}]);
