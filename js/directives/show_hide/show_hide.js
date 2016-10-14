app.directive('showHide', ['$', function ($) {

  return {
    restrict: 'A',
    scope: {
      currentState: '='
    },
    link: function _showHideLink (scope, el, attr, controller) {

      scope.compareWithCurrentState = function () {
        if (scope.currentState === attr['data-id']) {
          // console.log('DATA ID: ');
          // console.log(attr('data-id'));
          $(el).hide();
        }
      };

      scope.compareWithCurrentState();

      scope.flag = true;
      scope.toggle = function () {
        scope.flag = !scope.flag;
      };
    }
  };

}]);
