// remove cdn for angular in html
var app = angular.module('anglifyEdit', ['ngAnimate', 'ui.bootstrap']);

// note to remove jQuery from application
app.factory('$', ['$window', function($window){
  return $window.$;
}]);

app.factory('_', ['$window', function($window){
  return $window._;
}]);
