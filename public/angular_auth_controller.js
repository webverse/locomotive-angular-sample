
function AuthCtrl($scope, $window) {	
	// auth
	$scope.auth = function() {

		$window.location.href = '/auth/twitter';

	};
}