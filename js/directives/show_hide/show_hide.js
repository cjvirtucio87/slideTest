app.directive('showHide', function () {

  var showHide = {};
  var _scope = {};

  function _showHideLink (scope, el, attr) {
    console.log(attr);
    scope.flag = true;
    scope.toggle = function () {
      scope.flag = !scope.flag;
    };
  }


  showHide.restrict = 'A';
  showHide.scope = _scope;
  showHide.link = _showHideLink;

  return showHide;

});
