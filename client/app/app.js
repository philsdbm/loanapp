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
    $stateProvider.state('renewal_type_list', { url: "/renewal_types", templateUrl: 'app/renewal_type/list.html', controller: 'Renewal_typeListController' });
    $stateProvider.state('renewal_type_edit', { url: "/renewal_type/edit", templateUrl: 'app/renewal_type/edit.html', controller: 'Renewal_typeEditController' });
    $stateProvider.state('renewal_type_edit_id', { url: "/renewal_type/edit/:id", templateUrl: 'app/renewal_type/edit.html', controller: 'Renewal_typeEditController' });
    $stateProvider.state('member_list', { url: "/members", templateUrl: 'app/member/list.html', controller: 'MemberListController' });
    $stateProvider.state('member_edit', { url: "/member/edit", templateUrl: 'app/member/edit.html', controller: 'MemberEditController' });
    $stateProvider.state('member_edit_id', { url: "/member/edit/:id", templateUrl: 'app/member/edit.html', controller: 'MemberEditController' });
    $stateProvider.state('account_balance_list', { url: "/account_balances", templateUrl: 'app/account_balance/list.html', controller: 'Account_balanceListController' });
    $stateProvider.state('account_balance_edit', { url: "/account_balance/edit", templateUrl: 'app/account_balance/edit.html', controller: 'Account_balanceEditController' });
    $stateProvider.state('account_balance_edit_id', { url: "/account_balance/edit/:id", templateUrl: 'app/account_balance/edit.html', controller: 'Account_balanceEditController' });
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



































































































































































































































































































































































































































































































































































