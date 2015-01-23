'use strict';

angular.module('testYeomanApp')
  .controller('BureauListController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $http.get('/api/bureaus').success(function(bureaus) {
      $scope.bureaus = bureaus;
    });

    $scope.selectItem = function(item) {
        $location.path('/bureau/edit/' + item._id);
    }
    $scope.deleteItem = function(item) {
        $http.delete('/api/bureaus/' + item._id).success(function() {
            $http.get('/api/bureaus').success(function(bureaus) {
              $scope.bureaus = bureaus;
            });
        });
    }

      


    $scope.addNew = function() {
        $location.path('/bureau/edit')
    }
  }]);
