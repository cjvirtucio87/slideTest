app.directive('showHide', ['$', function ($) {

  return {
    restrict: 'A',
    scope: {
      currentState: '='
    },
    link: function _showHideLink (scope, el, attr, controller) {

      // var section = $(el)
      // if (scope.currentState === 'home'){
      //   if (section.attr('data-stated')) {
      //     section.hide();
      //   } else {
      //     section.show();
      //   }
      // } else {
      //   if (scope.currentState !== $(el).attr['data-id']){
      //     section.hide();
      //   } else {
      //     section.show();
      //   }
      //
      // }

      scope.compareWithCurrentState = function () {
        var section = $(el);
        if (scope.currentState === 'home') {
          if (section.attr('data-stated')) {
            section.hide();
          } else {
            section.show();
          }
        } else {
          if (scope.currentState !== $(el).attr('data-id')) {
            $(el).hide();
          } else {
            $(el).show();
          }
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
