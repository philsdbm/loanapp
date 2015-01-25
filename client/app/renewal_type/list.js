'use strict';

angular.module('testYeomanApp')
  .controller('Renewal_typeListController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $http.get('/api/renewal_types').success(function(renewal_types) {
      $scope.renewal_types = renewal_types;
    });

    $scope.selectItem = function(item) {
        $location.path('/renewal_type/edit/' + item._id);
    }
    $scope.deleteItem = function(item) {
        $http.delete('/api/renewal_types/' + item._id).success(function() {
            $http.get('/api/renewal_types').success(function(renewal_types) {
              $scope.renewal_types = renewal_types;
            });
        });
    }

      


    $scope.addNew = function() {
        $location.path('/renewal_type/edit')
    }
  }]);
