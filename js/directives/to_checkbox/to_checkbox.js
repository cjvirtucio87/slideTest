app.directive('toCheckbox', [function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/to_checkbox/to_checkbox.html',
    scope: {
      dataSlideId: '=',
      nodeForm: '='
    },
    link: function (scope, element) {
      scope.checkBoxState = true;
      scope.toggleCB = function () {
        scope.checkBoxState = !scope.checkBoxState;
      };
      scope.getDataId = function () {
        var slideTag = element.closest('section');
        if (!slideTag.length) {
          slideTag = element.closest('header');
        }
        return slideTag.attr('data-id');
      };

      scope.getDataId();
    }
  };
}]);
