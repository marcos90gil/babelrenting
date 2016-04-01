angular.module('babelrenting').controller('MoviesListController', 
	['$scope', '$log', '$filter', 'APIClient', 'URL', 'paths',
    function($scope, $log, $filter, APIClient, URL, paths){
		
		// Scope model init
		$scope.model = [];
        $scope.uiState = 'loading';
        $scope.url = URL.resolve; 

        // User init
        var user = APIClient.takeUser();

        // Scope methods
        $scope.getMovieDetailURL = function(movie) {
            return URL.resolve(paths.url.movieDetail, { id: movie.id });
        };

        $scope.saveRenter = function(movie) {
            movie.renter = user;
            movie.rent_date = $filter('date')(new Date(), 'yyyy-MM-dd');
            APIClient.rentMovie(movie);
        };

        // Controller start
        APIClient.getMovies().then(
        	//resolved promise
        	function(data) {        	
                var movies = data;
                if (movies.length === 0) {
                    $scope.uiState = 'blank';
                } else {
                    $scope.model = movies;
                    $scope.uiState = 'ideal';
        		}
        	},
        	//rejected promise
        	function() {
        		$scope.uiState = 'error';
        	}
    	);

	}]

);