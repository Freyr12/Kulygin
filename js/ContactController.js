angular.module("kulygin").controller("ContactController", [
  '$scope',
  '$location',
  '$rootScope',
  '$routeParams',
function($scope, $location, $rootScope, $routeParams) {
  $scope.phone = "860 1045";
  $scope.email = "fridfinnur@kulygin.is";
}]);
