// remove cdn for angular in html
var app = angular.module('anglifyEdit', []);

app.factory('$', ['$window', function($window){
  return $window.$;
}]);
