var phonecatApp = angular.module('phonecatApp', []);
//Why the $scope and $http are needed in the array?
//Because when I minify the js code for controllers,
//all of functioin arguments would be minified as well,
//and the dependency injector would not be able to
//identify services correctly.
phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('data/phones/phones.json').success(function(data) {
    $scope.phones = data.splice(0, 5);
  });
  $scope.orderProp = "age";
}]);