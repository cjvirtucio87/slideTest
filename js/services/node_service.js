// Container for the checked out nodes.
app.factory('NodeService', function () {

  var srv = {};
  var _data = {};

  // Adding changes.
  function _addChange (node, change) {

  }

  srv.saveNodeForm = function (formData) {
    angular.copy(formData,_data);
    console.log(_data);
  };

  return srv;

});
