'use strict';

angular.module('testYeomanApp')
  .controller('BureauEditController', ['$scope', '$http', '$stateParams','$location', function ($scope, $http, $stateParams, $location) {
    var bureauId = $stateParams.id;
    if(bureauId && bureauId.length > 0) {
        $http.get('/api/bureaus/' + bureauId).success(function(bureau) {
          $scope.bureau = bureau;

          

        });
    }

    $scope.saveItem = function() {
        if(bureauId && bureauId.length > 0) {
            $http.put('/api/bureaus/' + bureauId, $scope.bureau).success(function(bureau) {
                $location.path('/bureaus')
            });
        }
        else {
            $http.post('/api/bureaus', $scope.bureau).success(function(bureau) {
                $location.path('/bureaus')
            });
        }
    };

      
  }]);
