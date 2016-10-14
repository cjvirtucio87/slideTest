app.directive('showHide', function () {

  return {
    restrict: 'A',
    scope: {
      currentState: '='
    },
    link: function _showHideLink (scope, el, attr, controller) {
      var slideTag = el.parent();

      console.log(scope.currentState);

      scope.compareWithCurrentState = function () {

      };

      scope.flag = true;
      scope.toggle = function () {
        scope.flag = !scope.flag;
      };
    }
  };

});
