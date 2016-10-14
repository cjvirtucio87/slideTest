app.directive('showHide', ['$', function ($) {

  return {
    restrict: 'A',
    scope: {
      currentState: '='
    },
    link: function _showHideLink (scope, el, attr, controller) {

      scope.compareWithCurrentState = function () {
        // console.log(scope.currentState);
        console.log($(el).attr('data-id'));
        if (scope.currentState === attr['data-id']) {
          // console.log('DATA ID: ');
          // console.log(attr('data-id'));
          el.hide();
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
