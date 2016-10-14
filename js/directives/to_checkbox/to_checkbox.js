app.directive('toCheckbox', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/to_checkbox/to_checkbox.html',
    scope: {
      dataSlideId: '='
    },
    link: function (scope) {
      scope.checkBoxState = true;
      scope.toggleCB = function () {
        scope.checkBoxState = !scope.checkBoxState;
      };
    }
  };
});
