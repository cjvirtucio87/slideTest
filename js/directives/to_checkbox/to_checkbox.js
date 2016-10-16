app.directive('toCheckbox', ['NodeService', function(NodeService) {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/to_checkbox/to_checkbox.html',
    scope: {
      nodeForm: '='
    },
    link: function (scope, element) {
      // scope.nodeForm = {};

      scope.getDataId = function () {
        var slideTag = element.closest('section');
        if (!slideTag.length) {
          slideTag = element.closest('header');
        }
        return slideTag.attr('data-id');
      };
    }
  };
}]);
