angular.module("kulygin").controller("ContactController", [
  '$scope',
  '$location',
  '$rootScope',
  '$routeParams',
function($scope, $location, $rootScope, $routeParams) {
  $scope.phone = "581 2345";
  $scope.email = "kulygin@kulygin.is";
  $scope.fax = "N/A";
}]);
