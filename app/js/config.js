//Setting up route
angular.module('ngnix-config').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        
        // when('/settings', {
        //     templateUrl: 'views/settings/main.html',
        //     access: {
        //         restricted: false
        //     }
        // }).
        when('/', {
            templateUrl: 'app/views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('ngnix-config').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);

angular.module('ngnix-config').run(function($rootScope, $location, $route, $window) {
    $rootScope.$on('$routeChangeStart',
        function(event, next, current) {
            if (next.access && next.access.restricted && !user) {
                $location.path('#!/');
                $route.reload();
            }
        });
});