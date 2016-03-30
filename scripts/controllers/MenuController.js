angular.module('babelrenting').controller('MenuController',
	['$scope', '$location', 'paths', function($scope, $location, paths){
		
		// Scope init
		$scope.model = {
			selectedItem: paths.url.movies
		};
		$scope.paths = paths;

		// Scope methods
		$scope.getClassForItem = function(item){
			if ($scope.model.selectedItem === item) {
				return 'active';
			} else {
				return '';
			}
		};

		// Scope event listeners
	    $scope.$on('$locationChangeSuccess', function() {
	        $scope.model.selectedItem = $location.path();
	    });

	}]
);
