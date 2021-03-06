app.controller('PageWatchCtrl',
['$scope', '$', 'NodeService', '$rootScope', function($scope, $, NodeService, $rootScope){
  var elements = $('body *');

  for (var i =1; i < ( 1 + elements.length ); i++){
    $(elements[i]).attr('data-id', i);
  }
  // compare element's id with currentstate; if match { show }

  $scope.states = ['home'];
  $scope.count = 0;
  $scope.nextState = function (slideTo) {
    if(slideTo){
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
    $scope.nextState($scope.states.length);
  };

  $scope.nextState = function(jump) {
    if (jump){
      $scope.count = jump - 1;
    } else {
      $scope.count = ($scope.count + 1) % $scope.states.length;
    }
    $scope.$broadcast('states.nextState', $scope.states[$scope.count] );
  };

  // Using the node ids in the service to get the nodes from the DOM
  $scope.getNodes = function () {
    _.map(NodeService.getNodeIds(), function(id) {
      return $("*[data-id='" + id + "']").first();
    });
  };

  // Saving the nodes.
  $scope.nodeForm = {};
  $scope.saveNodes = function () {
    NodeService.saveNodeForm($scope.nodeForm);
  };

  // Edit states of the different parts.
  $scope.editStates = {
    section: false,
    textbox: false
  };

  $scope.test = function () {
    console.log('this is firing');
  };

  // Listener for toggle events in the sidebar.
  $rootScope.$on('sidebar.toggled', function (ev, editStates) {
    angular.copy(editStates, $scope.editStates);
  });

}]);
