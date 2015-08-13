//Why the $scope and $http are needed in the array?
//Because when I minify the js code for controllers,
//all of functioin arguments would be minified as well,
//and the dependency injector would not be able to
//identify services correctly.
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/phones/phones.json').success(function(data) {
      $scope.phones = data;
    });
    $scope.orderProp = "age";
  }
]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }
]);