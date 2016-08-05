angular.module('ngnix-config.system').controller('IndexController', ['$scope', function($scope) {
    $scope.test = "Hello";
    
    //test tree model 1
    $scope.sitesTreeView = [
        { "roleName" : "Server", "roleId" : "role2", "children" : [] },
        { "roleName" : "Sites", "roleId" : "role1", "children" : [
          { "roleName" : "Default", "roleId" : "role12", "children" : [] }
        ]}
      ];
}]);