'use strict';

angular.module('testYeomanApp')
  .controller('MemberEditController', ['$scope', '$http', '$stateParams','$location', function ($scope, $http, $stateParams, $location) {
    var memberId = $stateParams.id;
    if(memberId && memberId.length > 0) {
        $http.get('/api/members/' + memberId).success(function(member) {
          $scope.member = member;

                $scope.member.join_date = new Date(member.join_date);
            

        });
    }

    $scope.saveItem = function() {
        if(memberId && memberId.length > 0) {
            $http.put('/api/members/' + memberId, $scope.member).success(function(member) {
                $location.path('/members')
            });
        }
        else {
            $http.post('/api/members', $scope.member).success(function(member) {
                $location.path('/members')
            });
        }
    };

      
    $http.get('/api/bureaus').success(function(bureaus) {
      $scope.bureauList = bureaus;
    });
    
    $http.get('/api/loans').success(function(loans) {
      $scope.loanList = loans;
    });
    
  }]);
