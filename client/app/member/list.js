'use strict';

angular.module('testYeomanApp')
  .controller('MemberListController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $http.get('/api/members').success(function(members) {
      $scope.members = members;
    });

    $scope.selectItem = function(item) {
        $location.path('/member/edit/' + item._id);
    }
    $scope.deleteItem = function(item) {
        $http.delete('/api/members/' + item._id).success(function() {
            $http.get('/api/members').success(function(members) {
              $scope.members = members;
            });
        });
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
        $location.path('/member/edit')
    }
  }]);
