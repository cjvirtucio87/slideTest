// Container for the checked out nodes.
app.factory('NodeService', function () {

  var srv = {};
  var _data = {};

  // Adding changes.
  function _addChange (nodeId, change) {
    _data[nodeId].push(change);
  }

  srv.saveNodeForm = function (formData) {
    // Save form data into _data object.
    angular.copy(formData,_data);
    angular.forEach(Object.keys(formData), function(key) {
      // Initializing container for changes.
      _data[key] = [];
    });
  };

  srv.getNodeIds = function () {
    return Object.keys(_data);
  };

  return srv;

});

// we need to store the nodes
// we need to store changes to the nodes
// changes will be an array

// SLIDE ID
// - array of changes
