angular.module("babelrenting").controller("MovieFormController", ["$scope", "APIClient", "$window", function($scope, APIClient, $window) {

    console.log("Estoy en el controlador");

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
                    $scope.movieForm.$setPristine();
                    $window.location.href = "#/movies";
                },
                function(error) {
                    $scope.errorMessage = "Fatal error. Then end is near.";
                }
            )
    }

    $scope.date = function() {
        APIClient.getDate($scope);
        console.log("Fecha obtenida con éxito");
        $scope.successMessage = "Date obtained ";

    }

}]);
