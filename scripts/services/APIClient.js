angular.module('babelrenting').service('APIClient', ["$window",'$http', '$q', 'apiPaths', 'URL',
    function($window, $http, $q, apiPaths, URL) {


        this.saveUser = function(user) {
        	console.log("Estoy en el servicio accediendo a saveUser con el name", user.username);
           	$window.localStorage.setItem("username", user.username);
        };

        this.takeUser = function() {
            return $window.localStorage.getItem("username");
        };

        this.clearUser = function() {
            $window.localStorage.setItem("username", "");
        };

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

    }
]);
