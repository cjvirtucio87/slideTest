// remove cdn for angular in html
var app = angular.module('anglifyEdit', []);

app.factory('$', ['$window', function($window){
  return $window.$;
}]);

app.controller('pageWatchCtrl', ['$scope', '$', function($scope, $){
  var elements = $('body *');

  for (var i =1; i < ( 1 + elements.length ); i++){
    $(elements[i]).attr('data-id', i);
  }
  // compare element's id with currentstate; if match { show }

  $scope.states = ['home'];

  $scope.count = 0;

  // Clicking 'make a new slide' on a section/header/footer
  // should take it out of the main page and give it its own slide.
  $scope.createSlide = function($event){
    var slideTag = $($event.currentTarget).first().parent();
    slideTag.attr('data-stated', 1);
    $scope.states.push(slideTag.attr('data-id'));
  };

  $scope.nextState = function () {
    $scope.count = ($scope.count + 1) % $scope.states.length;
    $scope.$broadcast('states.nextState', $scope.states[$scope.count]);
  };

}]);
