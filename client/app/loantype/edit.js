'use strict';

angular.module('testYeomanApp')
  .controller('LoantypeEditController', ['$scope', '$http', '$stateParams','$location', function ($scope, $http, $stateParams, $location) {
    var loantypeId = $stateParams.id;
    if(loantypeId && loantypeId.length > 0) {
        $http.get('/api/loantypes/' + loantypeId).success(function(loantype) {
          $scope.loantype = loantype;

          

        });
    }

    $scope.saveItem = function() {
        if(loantypeId && loantypeId.length > 0) {
            $http.put('/api/loantypes/' + loantypeId, $scope.loantype).success(function(loantype) {
                $location.path('/loantypes')
            });
        }
        else {
            $http.post('/api/loantypes', $scope.loantype).success(function(loantype) {
                $location.path('/loantypes')
            });
        }
    };
    
    $scope.trueFalseOptions = [{
        value: true,
        label: 'Yes'
    }, {
        value: false,
        label: 'No'
    }];

      
  }]);
