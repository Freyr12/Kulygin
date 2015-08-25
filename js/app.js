angular.module('kulygin', ['ngRoute']);

angular.module('kulygin').config(['$routeProvider',
function ($routeProvider) {
  $routeProvider
    .when('/frontpage', { templateUrl: 'views/frontpage.html', controller: 'SimpleController' })
    .when('/about', { templateUrl: 'views/about.html', controller: 'AboutController' })
    .when('/contact', { templateUrl: 'views/contact.html', controller: 'ContactController' })
    .when('/radgjafarverkefni', { templateUrl: 'views/radgjafarverkefni.html', controller: 'RadgjafarverkefniController' })
    .when('/vidburdarstjornun', { templateUrl: 'views/vidburdarstjornun.html', controller: 'VidburdarstjornunController' })
    .when('/reynsla', { templateUrl: 'views/reynsla.html', controller: 'ReynslaController' })
    .otherwise({
      redirectTo: '/frontpage'
    });
}]);
