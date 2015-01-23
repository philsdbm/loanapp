'use strict';

angular.module('testYeomanApp')
  .controller('LoanformListController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $http.get('/api/loanforms').success(function(loanforms) {
      $scope.loanforms = loanforms;
    });

    $scope.selectItem = function(item) {
        $location.path('/loanform/edit/' + item._id);
    }
    $scope.deleteItem = function(item) {
        $http.delete('/api/loanforms/' + item._id).success(function() {
            $http.get('/api/loanforms').success(function(loanforms) {
              $scope.loanforms = loanforms;
            });
        });
    }

      
        $http.get('/api/renewaltypes').success(function(renewaltypes) {
            $scope.renewaltypes = renewaltypes;
        });
        $scope.getRenewaltypeById = function(id) {
            var results = jQuery.grep($scope.renewaltypes, function( renewaltype, i ) {
                return ( renewaltype._id === id );
            });
            return results[0];
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
        
        $http.get('/api/bureaus').success(function(bureaus) {
            $scope.bureaus = bureaus;
        });
        $scope.getBureauById = function(id) {
            var results = jQuery.grep($scope.bureaus, function( bureau, i ) {
                return ( bureau._id === id );
            });
            return results[0];
        }
        


    $scope.addNew = function() {
        $location.path('/loanform/edit')
    }
  }]);
