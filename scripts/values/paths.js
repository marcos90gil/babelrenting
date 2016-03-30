angular.module("babelrenting").constant("paths", {
    url: {
	    home: "/",
	    movies: "/movies",
	    movieNew: "/movies/new",
	    movieDetail: "/movies/:id",
	    moviesRent: "/movies/rent/",
	    moviesShared: "/movies/shared/",
	    movieRenter: "/movies/:renter",
	    movieOwner: "/movies/:owner",
	    notFound: "/sorry"
    },
    titles: {
    	home: "Babel Movies Rent",
	    movies: "Movies",
	    movieNew: "Create Movie",
	    movieDetail: "Info",
	    moviesRent: "Rented",
	    moviesShared: "Shared",
	    movieRenter: "Renter",
	    movieOwner: "Owner",
	    notFound: "Sorry not found"	
    }
});