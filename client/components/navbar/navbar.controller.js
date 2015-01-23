'use strict';

angular.module('testYeomanApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    // MENU ITEM BEGIN
    $scope.menu.push({
        'title': 'Loanform',
        'link': '/loanforms'
    });
    $scope.menu.push({
        'title': 'Loantype',
        'link': '/loantypes'
    });
    $scope.menu.push({
        'title': 'Renewaltype',
        'link': '/renewaltypes'
    });
    $scope.menu.push({
        'title': 'Member',
        'link': '/members'
    });
    $scope.menu.push({
        'title': 'Bureau',
        'link': '/bureaus'
    });
    // MENU ITEM END
    
    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });































































