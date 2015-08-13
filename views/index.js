var phonecatApp = angular.module('phonecatApp', ['ngRoute']);
//var phonecatApp = angular.module('phonecatApp', ['ngRoute', 'phonecatControllers']);
debugger
phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/phones', {
      templateUrl: '/phone-list',
      controller: 'PhoneListCtrl'
    }).
    when('/phones/:phoneId', {
      templateUrl: '/phone-detail',
      controller: 'PhoneDetailCtrl'
    }).
    otherwise({
      redirectTo: '/phones'
    });
  }
]);