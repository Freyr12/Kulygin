angular.module("kulygin").controller("SimpleController", [
  '$scope',
  '$location',
  '$rootScope',
  '$routeParams',
function($scope, $location, $rootScope, $routeParams) {
  $scope.customers = [
    { name: 'John Smith', city: 'Phoenix' },
    { name: 'John Doe', city: 'Los Angeles' },
    { name: 'Freyr Fridfinns', city: 'Husavik' },
    { name: 'Frooze', city: 'Undercity' },
    { name: 'Kjelmhund', city: 'Orgrimmar' }
  ];
}]);
