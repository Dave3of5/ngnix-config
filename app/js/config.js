//Setting up route
angular.module('ngnix-config').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/articles', {
            templateUrl: 'views/articles/list.html',
            access: {
                restricted: false
            }
        }).
        when('/articles/create', {
            templateUrl: 'views/articles/create.html',
            access: {
                restricted: false
            }
        }).
        when('/articles/:articleId/edit', {
            templateUrl: 'views/articles/edit.html',
            access: {
                restricted: false
            }
        }).
        when('/articles/:articleId', {
            templateUrl: 'views/articles/view.html',
            access: {
                restricted: false
            }
        }).
        when('/projects', {
            templateUrl: 'views/projects/main.html',
            access: {
                restricted: false
            }
        }).
        when('/projects/create', {
            templateUrl: 'views/projects/create.html',
            access: {
                restricted: false
            }
        }).
        when('/projects/edit/:projectId', {
            templateUrl: 'views/projects/edit.html',
            access: {
                restricted: false
            }
        }).
        when('/projectEditor/:projectId', {
            templateUrl: 'views/projectEditor/main.html',
            access: {
                restricted: false
            }
        }).
        when('/community', {
            templateUrl: 'views/community/main.html',
            access: {
                restricted: false
            }
        }).
        when('/settings', {
            templateUrl: 'views/settings/main.html',
            access: {
                restricted: false
            }
        }).
        when('/', {
            templateUrl: 'views/index.html'
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