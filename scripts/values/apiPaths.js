angular.module("babelrenting").value("apiPaths", {
	movies: "api/movies",
	movieDetail: "api/movies/:id",
	movieRenter: "api/movies/:renter",
    movieOwner: "api/movies/:owner"
});