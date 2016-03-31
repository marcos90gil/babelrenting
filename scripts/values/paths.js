angular.module("babelrenting").constant("paths", {
   
    url: {
	    home: "/",
	    movies: "/movies",
	    movieNew: "/movies/new",
	    movieDetail: "/movies/:id",
	    notFound: "/sorry"
    },
    
    titles: {
    	home: "Babel Renting",
	    movies: "Movies",
	    movieNew: "Save Movie",
	    movieDetail: "Info",
	    notFound: "Sorry not found"	
    }
});

