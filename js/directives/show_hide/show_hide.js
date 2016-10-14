app.directive('showHide', ['$', function ($) {

  return {
    restrict: 'A',
    scope: {
      currentState: '='
    },
    link: function _showHideLink (scope, el, attr, controller) {

      scope.compareWithCurrentState = function () {
        // console.log((scope.currentState === $(el).attr('data-id')));
        if (scope.currentState !== $(el).attr('data-id')) {
          $(el).hide();
        } else {
          $(el).show();
        }
      };

      scope.flag = true;
      scope.toggle = function () {
        scope.flag = !scope.flag;
      };

      scope.$on('states.nextState', function(ev, arg) {
        // console.log(arg);
        scope.compareWithCurrentState();
      });
    }
  };

}]);
