'use strict';

angular.module('testYeomanApp')
  .controller('LoanformEditController', ['$scope', '$http', '$stateParams','$location', function ($scope, $http, $stateParams, $location) {
    var loanformId = $stateParams.id;
    if(loanformId && loanformId.length > 0) {
        $http.get('/api/loanforms/' + loanformId).success(function(loanform) {
          $scope.loanform = loanform;

                $scope.loanform.loan_date = new Date(loanform.loan_date);
                  $scope.loanform.previous_loan_granted_on = new Date(loanform.previous_loan_granted_on);
                  $scope.loanform.check_date = new Date(loanform.check_date);
            

        });
    }

    $scope.saveItem = function() {
        if(loanformId && loanformId.length > 0) {
            $http.put('/api/loanforms/' + loanformId, $scope.loanform).success(function(loanform) {
                $location.path('/loanforms')
            });
        }
        else {
            $http.post('/api/loanforms', $scope.loanform).success(function(loanform) {
                $location.path('/loanforms')
            });
        }
    };

      
    $http.get('/api/renewal_types').success(function(renewal_types) {
      $scope.renewal_typeList = renewal_types;
    });
    
    $http.get('/api/loantypes').success(function(loantypes) {
      $scope.loantypeList = loantypes;
    });
    
    $http.get('/api/members').success(function(members) {
      $scope.memberList = members;
    });
    
    $scope.getMemberById = function(id) {
        var results = jQuery.grep($scope.memberList, function( member, i ) {
            return ( member._id === id );
        });
        return results[0];
    }
    $scope.memberUpdated = (function() {
        
    	$scope.loanform.bureau = $scope.getMemberById($scope.loanform.member).bureau;
    	
    	$scope.loanform.salary = $scope.getMemberById($scope.loanform.member).salary;
    	
    	$scope.loanform.fixed_deposit = $scope.getMemberById($scope.loanform.member).fixed_deposit;
    	
    	$scope.loanform.savings_deposit = $scope.getMemberById($scope.loanform.member).savings_deposit;
    	
    });
	 
	$scope.getMemberName = function(member) {
        return member.last_name + ", " + member.first_name + " " + member.middle_name;
    }
	
    $http.get('/api/bureaus').success(function(bureaus) {
      $scope.bureauList = bureaus;
    });
    
  }]);
