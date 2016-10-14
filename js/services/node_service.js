// Container for the checked out nodes.
app.factory('NodeService', function () {

  var srv = {};
  var _data = {};

  // Adding changes.
  function _addChange (node, change) {

  }

  srv.saveNodeForm = function (formData) {
    // Save form data into _data object.
    angular.copy(formData,_data);
    angular.forEach(Object.keys(formData), function(key) {
      // Initializing container for changes.
      _data[key] = [];
    });
  };

  return srv;

});

// we need to store the nodes
// we need to store changes to the nodes
// changes will be a

// SLIDE ID
// - array of changes
