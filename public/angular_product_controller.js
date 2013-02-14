
// angular product controller

function ProductCtrl($scope, $http) {

	$scope.newRecord = {};
	$scope.products = [];

	$http.get('/show').success(function(response, code) {
		$scope.products = response;		
	});

	// del TODO
	$scope.delete = function(index) {
		$scope.products.splice(index, 1);
	};

	// add
	$scope.save = function(newRecord) {

		$http.post('/create', newRecord).success(function(response, code) {
			$scope.products.push(newRecord);
			$scope.newRecord = {};
		});
	};

}