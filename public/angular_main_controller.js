
// angular main controller

angular.module('sample', [], function($routeProvider, $locationProvider) {
  
  $routeProvider.when('/', {
    templateUrl: '/partials/home.html',
    controller: HomeCtrl
  });	

  $routeProvider.when('/list', {
    templateUrl: '/partials/list.html',
    controller: ListCtrl
  });
 
  $locationProvider.html5Mode(true);
  
});

function MainCtrl($scope, $route, $routeParams, $location) {
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
}
 
function ListCtrl($scope, $routeParams) {
  $scope.name = "ListCtrl";
  //$scope.params = $routeParams;
}

function HomeCtrl($scope, $routeParams) {
  $scope.name = "HomeCtrl";
  //$scope.params = $routeParams;
}