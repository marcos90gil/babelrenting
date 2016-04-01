angular.module("babelrenting").controller("MovieFormController", ["$scope", "APIClient", function($scope, APIClient) {

    //Scope init
    $scope.model = {};
    $scope.successMessage = null;
    $scope.errorMessage = null;

    //Scope methods
    $scope.saveMovie = function() {
        APIClient.createMovie($scope.model)
            .then(
                function(movie) {
                	$scope.successMessage = "Movie saved!";
                	$scope.model = {};
                	$scope.movieNew.$setPristine();
                },
                function(error) {
                	$scope.errorMessage = "Fatal error. Then end is near.";
                }
            )
    };

}]);