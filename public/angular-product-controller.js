// angularjs controller

// angular.module('project', []).
//   config(function($routeProvider) {
//     $routeProvider.
//       when('/list', {controller:ProductCtrl, templateUrl:'list.html.ejs'}).      
//       otherwise({redirectTo:'/'});
//   });

function ProductCtrl($scope, $http) {

	$scope.newRecord = {};
	$scope.products = [];


	$http.get('/list').success(function(response, code) {
		$scope.products = response;
		console.log(response);
		console.log('[##] .................. angularjs controller :: http.get callback ................... [##]');
	});

	console.log('[##] .................. angularjs controller ................... [##]');

}