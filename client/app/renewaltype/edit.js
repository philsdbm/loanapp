'use strict';

angular.module('testYeomanApp')
  .controller('RenewaltypeEditController', ['$scope', '$http', '$stateParams','$location', function ($scope, $http, $stateParams, $location) {
    var renewaltypeId = $stateParams.id;
    if(renewaltypeId && renewaltypeId.length > 0) {
        $http.get('/api/renewaltypes/' + renewaltypeId).success(function(renewaltype) {
          $scope.renewaltype = renewaltype;

          

        });
    }

    $scope.saveItem = function() {
        if(renewaltypeId && renewaltypeId.length > 0) {
            $http.put('/api/renewaltypes/' + renewaltypeId, $scope.renewaltype).success(function(renewaltype) {
                $location.path('/renewaltypes')
            });
        }
        else {
            $http.post('/api/renewaltypes', $scope.renewaltype).success(function(renewaltype) {
                $location.path('/renewaltypes')
            });
        }
    };

      
  }]);
