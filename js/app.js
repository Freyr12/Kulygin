angular.module('kulygin', ['ngRoute']);

angular.module('kulygin').config(['$routeProvider',
function ($routeProvider) {
  $routeProvider
    .when('/frontpage', { templateUrl: 'views/frontpage.html', controller: 'SimpleController' })
    .otherwise({
      redirectTo: '/frontpage'
    });
}]);
