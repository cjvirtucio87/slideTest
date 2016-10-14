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
    var slideTag = $($event.currentTarget).first().closest('section');
    if (!slideTag.length){
      slideTag = $($event.currentTarget).first().closest('header');
    }

    slideTag.attr('data-slide', $scope.states.length);
    $scope.states.push(slideTag.attr('data-slide'));
    // Changing counter so we can 'redirect' to end of states array.
    $scope.count = $scope.states.length - 1;
  };

  $scope.nextState = function () {
    $scope.count = ($scope.count + 1) % $scope.states.length;
    $scope.$broadcast('states.nextState', $scope.states, $scope.count);
  };


}]);
