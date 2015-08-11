var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
  $scope.phones = [{
    'name': 'Nexus',
    'snippet': 'fast just. ...'
  }, {
    'name': 'Motorola',
    'snippet': 'next gen...'
  }, {
    'name': 'motorola xoom',
    'snippet': 'next tablet....'
  }];

  $scope.name = "World";
  $scope.orderProp = "age";
});