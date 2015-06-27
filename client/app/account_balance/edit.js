'use strict';

angular.module('testYeomanApp')
  .controller('Account_balanceEditController', ['$scope', '$http', '$stateParams','$location', function ($scope, $http, $stateParams, $location) {
    var account_balanceId = $stateParams.id;
    if(account_balanceId && account_balanceId.length > 0) {
        $http.get('/api/account_balances/' + account_balanceId).success(function(account_balance) {
          $scope.account_balance = account_balance;

                $scope.account_balance.application_date = new Date(account_balance.application_date);
                  $scope.account_balance.release_date = new Date(account_balance.release_date);
                  $scope.account_balance.as_of = new Date(account_balance.as_of);
            

        });
    }

    $scope.saveItem = function() {
        if(account_balanceId && account_balanceId.length > 0) {
            $http.put('/api/account_balances/' + account_balanceId, $scope.account_balance).success(function(account_balance) {
                $location.path('/account_balances')
            });
        }
        else {
            $http.post('/api/account_balances', $scope.account_balance).success(function(account_balance) {
                $location.path('/account_balances')
            });
        }
    };

      
    $http.get('/api/loantypes').success(function(loantypes) {
      $scope.loantypeList = loantypes;
    });
    
    $http.get('/api/members').success(function(members) {
      $scope.memberList = members;
    });
     
	$scope.getMemberName = function(member) {
        return member.last_name + ", " + member.first_name + " " + member.middle_name;
    }
	
  }]);
