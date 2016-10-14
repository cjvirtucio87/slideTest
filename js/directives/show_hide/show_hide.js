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
        if (slides.length < 2) {
          slides.find('button.create-slide').first().hide();
        } else {
          slides.find('button.create-slide').first().show();
        }
      };

      scope.compareWithCurrentState = function (states, count) {
        // console.log();
        var section = $(el);
        if(scope.currentState != section.attr('data-slide')){
          console.log(section);
          section.hide();
        } else {
          section.show();
        }
        console.log([states[count], section.attr('data-slide')]);
        // console.log(states);
        scope.checkLessThanTwo(states, count);
      };

      scope.$on('states.nextState', function(ev, states, count) {
        scope.compareWithCurrentState(states, count);
      });
    }
  };

}]);
