app.controller('MainCtrl', ['$rootScope', function ($rootScope) {
  var vm = this;

  vm.editStates = {
    section: false,
    textbox: false
  };

  // Listener for toggle events in the sidebar.
  $rootScope.$on('sidebar.toggled', function (ev, editStates) {
    angular.copy(editStates, vm.editStates);
  });
}]);
