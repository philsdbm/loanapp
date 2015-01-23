'use strict';

angular.module('testYeomanApp')
  .controller('RenewaltypeListController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $http.get('/api/renewaltypes').success(function(renewaltypes) {
      $scope.renewaltypes = renewaltypes;
    });

    $scope.selectItem = function(item) {
        $location.path('/renewaltype/edit/' + item._id);
    }
    $scope.deleteItem = function(item) {
        $http.delete('/api/renewaltypes/' + item._id).success(function() {
            $http.get('/api/renewaltypes').success(function(renewaltypes) {
              $scope.renewaltypes = renewaltypes;
            });
        });
    }

      


    $scope.addNew = function() {
        $location.path('/renewaltype/edit')
    }
  }]);
