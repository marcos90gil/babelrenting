angular.module('babelrenting').controller('LoginController', ["APIClient", "$scope", "$window", function(APIClient, $scope, $window) {

    console.log("Estoy en el controlador");

    $scope.model = {};
    $scope.successMessage = null;
    $scope.errorMessage = null;

    $scope.saveUsername = function() {
        console.log("Estoy accediendo al método del controlador saveUsername", $scope.model);
        APIClient.saveUser($scope.model)
        .then(
            function(user) {
                console.log("Guardado con éxito");
                $scope.successMessage = "Username saved! ";
                $window.location.href= "#/movies";
            },
            function(error) {
                console.log("Error");
                $scope.errorMessage = "Fatal error. Then end is near.";
            }
        )
    };



}]);
