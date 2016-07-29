angular.module('ngnix-config.system').controller('IndexController', ['$scope', 'Global', function($scope, Global) {
    $scope.global = Global;
}]);