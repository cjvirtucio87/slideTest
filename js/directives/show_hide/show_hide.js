app.directive('showHide', ['$', function ($) {

  return {
    restrict: 'A',
    scope: {
      currentState: '=',
    },
    link: function (scope, el, attr, controller) {
      scope.checkLessThanTwo = function (states, count) {
        // Check if there are less than two slides left.
        // Then hide/show button.
        var slides = $("[data-slide='" + states[count] + "']");
        // console.log(slides);
        if (slides.length < 2) {
          // console.log(slides.length);
          // console.log(slides.children('button.next-state-btn'));
          console.log(slides.find('button.create-slide'));
          slides.find('button.create-slide').first().hide();
        } else {
          slides.find('button.create-slide').first().show();
        }
      };

      scope.compareWithCurrentState = function (states, count) {
        var section = $(el);
        if(scope.currentState !== section.attr('data-slide')){
          section.hide();
        } else {
          section.show();
        }

        scope.checkLessThanTwo(states, count);
      };

      scope.$on('states.nextState', function(ev, states, count) {
        scope.compareWithCurrentState(states, count);
      });
    }
  };

}]);
