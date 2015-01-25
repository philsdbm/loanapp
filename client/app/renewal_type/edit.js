'use strict';

angular.module('testYeomanApp')
  .controller('Renewal_typeEditController', ['$scope', '$http', '$stateParams','$location', function ($scope, $http, $stateParams, $location) {
    var renewal_typeId = $stateParams.id;
    if(renewal_typeId && renewal_typeId.length > 0) {
        $http.get('/api/renewal_types/' + renewal_typeId).success(function(renewal_type) {
          $scope.renewal_type = renewal_type;

          

        });
    }

    $scope.saveItem = function() {
        if(renewal_typeId && renewal_typeId.length > 0) {
            $http.put('/api/renewal_types/' + renewal_typeId, $scope.renewal_type).success(function(renewal_type) {
                $location.path('/renewal_types')
            });
        }
        else {
            $http.post('/api/renewal_types', $scope.renewal_type).success(function(renewal_type) {
                $location.path('/renewal_types')
            });
        }
    };

      
  }]);
