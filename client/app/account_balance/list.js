'use strict';

angular.module('testYeomanApp')
  .controller('Account_balanceListController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $http.get('/api/account_balances').success(function(account_balances) {
      $scope.account_balances = account_balances;
    });

    $scope.selectItem = function(item) {
        $location.path('/account_balance/edit/' + item._id);
    }
    $scope.deleteItem = function(item) {
        $http.delete('/api/account_balances/' + item._id).success(function() {
            $http.get('/api/account_balances').success(function(account_balances) {
              $scope.account_balances = account_balances;
            });
        });
    }

      
        $http.get('/api/loantypes').success(function(loantypes) {
            $scope.loantypes = loantypes;
        });
        $scope.getLoantypeById = function(id) {
            var results = jQuery.grep($scope.loantypes, function( loantype, i ) {
                return ( loantype._id === id );
            });
            return results[0];
        }
	        
        $http.get('/api/members').success(function(members) {
            $scope.members = members;
        });
        $scope.getMemberById = function(id) {
            var results = jQuery.grep($scope.members, function( member, i ) {
                return ( member._id === id );
            });
            return results[0];
        }
	        
	    		
	    	$scope.getMemberName = function(member) {
	            return member.last_name + ", " + member.first_name + " " + member.middle_name;
	        }
	    	
	    	


    $scope.addNew = function() {
        $location.path('/account_balance/edit')
    }
  }]);
