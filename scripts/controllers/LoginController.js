angular.module('babelrenting').controller('LoginController', ["APIClient", "$scope", "$window", function(APIClient, $scope, $window) {

    $scope.model = {};
    $scope.successMessage = null;
    $scope.errorMessage = null;

    $scope.saveUsername = function() {
        APIClient.saveUser($scope.model)
        console.log("Guardado con éxito");
        $scope.successMessage = "Username saved! ";
        $window.location.href = "#/movies";
    };



}]);
