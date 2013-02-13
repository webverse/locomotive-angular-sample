function ProductCtrl($scope, $http) {

	$scope.newRecord = {};
	$scope.products = [];


	$http.get('/list').success(function(response, code) {
		$scope.products = response;
		// console.log(response);
		// console.log('[##] .................. angularjs controller :: http.get callback ................... [##]');
	});

	// console.log('[##] .................. angularjs controller ................... [##]');

	// del
	$scope.delete = function(index) {
		$scope.products.splice(index, 1);
	};

	// add
	$scope.save = function(newRecord) {

		// console.log(newRecord);

		$http.post('/create', newRecord).success(function(response, code) {

			// console.log('[##] ..........................angularjs post callback.........................[##]');
			// console.log(newRecord);

			$scope.products.push(newRecord);
			$scope.newRecord = {};
		});
	};

}