var appModule = appModule || angular.module('helloWorldApp', []);
appModule.controller('otherController',function($scope){
    $scope.values = [1,2,3,4,5,6];
});

appModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', { template: 'empty' })
    .when('/Action/:id', { controller: 'otherController', templateUrl: 'templates/values_template.html' })
    .when('/Action', {templateUrl: 'templates/simple.html' });
} ]);