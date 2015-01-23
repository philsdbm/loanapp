'use strict';

angular.module('testYeomanApp')
  .controller('LoanformEditController', ['$scope', '$http', '$stateParams','$location', function ($scope, $http, $stateParams, $location) {
    var loanformId = $stateParams.id;
    if(loanformId && loanformId.length > 0) {
        $http.get('/api/loanforms/' + loanformId).success(function(loanform) {
          $scope.loanform = loanform;
          $scope.loanform.loan_date = new Date(loanform.loan_date);
            

        });
    }

    $scope.member_bureau = "";
    $scope.change_member = function() {
    	$scope.loanform.bureau = $scope.getMemberById($scope.loanform.member).bureau;
    };
    
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

      
    $scope.combined = function(member){
            return member.last_name + ", " + member.first_name + " " + member.middle_name;
    }

    $http.get('/api/renewaltypes').success(function(renewaltypes) {
      $scope.renewaltypeList = renewaltypes;
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

    $http.get('/api/bureaus').success(function(bureaus) {
      $scope.bureauList = bureaus;
    });
    
    $scope.getBureauById = function(id) {
        var results = jQuery.grep($scope.bureauList, function( bureau, i ) {
            return ( bureau._id === id );
        });
        return results[0];
    }
    
    

        
  }]);
