angular.module('babelrenting').service('APIClient',
	['$http', '$q', 'apiPaths', 'URL', 
	function($http, $q, apiPaths, URL) {
	
		this.apiRequest = function(url) {

			// deferred object creation
			var deferred = $q.defer();

			// async work
			$http.get(url)
				.then(
					// ok request
					function(response) {
						// promise resolve
						deferred.resolve(response.data);
					},
					// KO request
					function(response) {
						// promise reject
						deferred.reject(response.data);
					}
				);

			// return promise
			return deferred.promise;

		};

		this.getMovies = function() {

			return this.apiRequest(apiPaths.movies);

		};

		this.getMovie = function(movieId) {

			var url = URL.resolve(apiPaths.movieDetail, { id: movieId });
			return this.apiRequest(url);

		};


		this.createMovie = function(movie) {
			// deferred object creation
			var deferred = $q.defer();

			// async work
			$http.post(apiPaths.movies, movie)
				.then(
					// ok request
					function(response) {
						// promise resolve
						deferred.resolve(response.data);
					},
					// KO request
					function(response) {
						// promise reject
						deferred.reject(response.data);
					}
				);

			// return promise
			return deferred.promise;

		};

	}]
);