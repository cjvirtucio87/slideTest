app.controller('pageWatchCtrl', ['$scope', '$', function($scope, $){
  var elements = $('body *');

  for (var i =1; i < ( 1 + elements.length ); i++){
    $(elements[i]).attr('data-id', i);
  }
  // compare element's id with currentstate; if match { show }

  $scope.states = ['home'];

  $scope.count = 0;

  $scope.nextState = function (slideTo) {
    if(slideTo){
      console.log('in slieeTo');
      $scope.count = slideTo;
    } else {
      $scope.count = ($scope.count + 1) % $scope.states.length;
    }
    $scope.$broadcast('states.nextState', $scope.states, $scope.count);
  };

  // Clicking 'make a new slide' on a section/header/footer
  // should take it out of the main page and give it its own slide.
  $scope.createSlide = function($event){
    var slideTag = $($event.currentTarget).closest('section');
    if (!slideTag.length){
      slideTag = $($event.currentTarget).closest('header');
    }

    slideTag.attr('data-slide', $scope.states.length);
    $scope.states.push(slideTag.attr('data-slide'));
    // Changing counter so we can 'redirect' to end of states array.
    // $scope.nextState( $scope.states.length-1 );
    // Current state being passed in is the same. It doesn't see a new state until you click on the directive.
  };




}]);
