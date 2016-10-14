app.directive('showHide', ['$', function ($) {

  return {
    restrict: 'A',
    scope: {
      currentState: '=',
    },
    link: function (scope, el, attr, controller) {
      scope.checkLessThanTwo = function (slide) {
        // Check if there are less than two slides left.
        // Then hide/show button.
        var slides = $("[data-slide='" + slide + "']");
        if (slides.length < 2) {
          // console.log(slides.length);
          // console.log(slides.children('button.next-state-btn'));
          slides.find('button.create-slide').first().hide();
        } else {
          slides.find('button.create-slide').first().show();
        }
      };

      scope.compareWithCurrentState = function (slide) {
        var section = $(el);
        if(slide !== section.attr('data-slide')){
          section.hide();
        } else {
          section.show();
        }

        scope.checkLessThanTwo(slide);
      };

      scope.$on('states.nextState', function(ev, slide) {
        scope.compareWithCurrentState(slide);
      });
    }
  };

}]);
