angular.module('babelrenting').controller('MoviesListController', 
	['$scope', '$log', 'APIClient', 'URL', 'paths',
    function($scope, $log, APIClient, URL, paths){
		
		// Scope model init
		$scope.model = [];
        $scope.uiState = 'loading';
        $scope.url = URL.resolve;

        // Scope methods
        $scope.getMovieDetailURL = function(movie) {
            return URL.resolve(paths.url.movieDetail, { id: movie.id });
        };

        // Controller start
        var user = APIClient.takeUser;
        $log.log(user);
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