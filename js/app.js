// remove cdn for angular in html
var app = angular.module('anglifyEdit', ['ngAnimate']);

app.factory('$', ['$window', function($window){
  return $window.$;
}]);
