'use strict';

angular.module('testYeomanApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');
      // MENU ITEM BEGIN
    $stateProvider.state('loanform_list', { url: "/loanforms", templateUrl: 'app/loanform/list.html', controller: 'LoanformListController' });
    $stateProvider.state('loanform_edit', { url: "/loanform/edit", templateUrl: 'app/loanform/edit.html', controller: 'LoanformEditController' });
    $stateProvider.state('loanform_edit_id', { url: "/loanform/edit/:id", templateUrl: 'app/loanform/edit.html', controller: 'LoanformEditController' });
    $stateProvider.state('loantype_list', { url: "/loantypes", templateUrl: 'app/loantype/list.html', controller: 'LoantypeListController' });
    $stateProvider.state('loantype_edit', { url: "/loantype/edit", templateUrl: 'app/loantype/edit.html', controller: 'LoantypeEditController' });
    $stateProvider.state('loantype_edit_id', { url: "/loantype/edit/:id", templateUrl: 'app/loantype/edit.html', controller: 'LoantypeEditController' });
    $stateProvider.state('renewaltype_list', { url: "/renewaltypes", templateUrl: 'app/renewaltype/list.html', controller: 'RenewaltypeListController' });
    $stateProvider.state('renewaltype_edit', { url: "/renewaltype/edit", templateUrl: 'app/renewaltype/edit.html', controller: 'RenewaltypeEditController' });
    $stateProvider.state('renewaltype_edit_id', { url: "/renewaltype/edit/:id", templateUrl: 'app/renewaltype/edit.html', controller: 'RenewaltypeEditController' });
    $stateProvider.state('member_list', { url: "/members", templateUrl: 'app/member/list.html', controller: 'MemberListController' });
    $stateProvider.state('member_edit', { url: "/member/edit", templateUrl: 'app/member/edit.html', controller: 'MemberEditController' });
    $stateProvider.state('member_edit_id', { url: "/member/edit/:id", templateUrl: 'app/member/edit.html', controller: 'MemberEditController' });
    $stateProvider.state('bureau_list', { url: "/bureaus", templateUrl: 'app/bureau/list.html', controller: 'BureauListController' });
    $stateProvider.state('bureau_edit', { url: "/bureau/edit", templateUrl: 'app/bureau/edit.html', controller: 'BureauEditController' });
    $stateProvider.state('bureau_edit_id', { url: "/bureau/edit/:id", templateUrl: 'app/bureau/edit.html', controller: 'BureauEditController' });
      // MENU ITEM END

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });












































































