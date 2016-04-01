angular.module('babelrenting').controller('AppController', ['$scope', '$location', 'paths', function($scope, $location, paths) {

    var controller = this;
    // Controller properties
    controller.titles = {};
    controller.titles[paths.url.home] = paths.titles.home;
    controller.titles[paths.url.movies] = paths.titles.movies;
    controller.titles[paths.url.movieNew] = paths.titles.movieNew;

    //Scope init
    $scope.model = {
        title: ''
    };

    // Scope event listeners
    $scope.$on('$locationChangeSuccess', function(evt, currentRoute) {
        $scope.model.title = controller.titles[$location.path()] || '404 Not Found';
    });

    $scope.$on('ChangeTitle', function(evt, title) {
        $scope.model.title = title;
    });

}]);
