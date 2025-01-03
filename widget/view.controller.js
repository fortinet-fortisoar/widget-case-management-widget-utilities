/* 
  author: anonyges@gmail.com
  modified: 250102 
*/
'use strict';
(function () {
  angular
    .module('cybersponse')
    .controller('community_anonyges_widget_utilities100DevCtrl', community_anonyges_widget_utilities100DevCtrl);

  community_anonyges_widget_utilities100DevCtrl.$inject = ['$scope', 'config'];

  function community_anonyges_widget_utilities100DevCtrl($scope, config) {
    $scope.config = config;
    console.debug("loaded community_anonyges_widget_utilities version 1.0.0", $scope);
  }
})();
