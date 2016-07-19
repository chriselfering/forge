// inject the module ngRoute into our app
angular.module('angularjsSimpleWebsiteApp', ['ngRoute'])

// inject the service $routeProvider, from ngRoute
angular.module('angularjsSimpleWebsiteApp').config(function ($routeProvider) {
    $routeProvider.when( '/', {
        templateUrl: '/views/main.html'
    });
    $routeProvider.when( '/contact', {
        templateUrl: '/views/contact.html'
    });
    $routeProvider.when( '/about', {
        templateUrl: '/views/about.html',
        controller : 'aboutCtrl',
    });

    // the default route
    $routeProvider
      .otherwise({
        redirectTo: '/about'
      });
  })
;

angular.module('angularjsSimpleWebsiteApp').controller('NavCtrl', ['$scope', '$location', NavCtrl])
function NavCtrl( $scope, $location ) {
    var nc = this
    var foo = '' // by declaring this variable in an outer controller, I can guarantee that any inner controllers can access it too.
  // $routeChangeSuccess is an event that is fired,
  // when the app has switched from one route to another.
    $scope.$on('$routeChangeSuccess', function() {
        nc.locationPath = $location.path();
        console.log('locationPath: ' + nc.locationPath );
    });
}

angular.module('angularjsSimpleWebsiteApp').controller('aboutCtrl', function ($scope) {
    $scope.aboutText = 'Every page on this site is embedded inside the index.html';
});
