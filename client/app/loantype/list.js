'use strict';

angular.module('testYeomanApp')
  .controller('LoantypeListController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $http.get('/api/loantypes').success(function(loantypes) {
      $scope.loantypes = loantypes;
    });

    $scope.selectItem = function(item) {
        $location.path('/loantype/edit/' + item._id);
    }
    
    $scope.deleteItem = function(item) {
        $http.delete('/api/loantypes/' + item._id).success(function() {
            $http.get('/api/loantypes').success(function(loantypes) {
              $scope.loantypes = loantypes;
            });
        });
    }

      


    $scope.addNew = function() {
        $location.path('/loantype/edit')
    }
  }]);
