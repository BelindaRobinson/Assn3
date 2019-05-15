getSunInfo = function(){

    let lat = document.getElementsByName("lat").value;
    let lng = document.getElementsByName("lng").value;

    

	//let t = document.getElementById("title").value;
    
    fetch("fetchsun.php=" + lat + "&lng=" + lng + "&date=today")

	//fetch("omdb.php?key=" + apikey + "&title=" + t) //fetch request to php script
	.then(response => response.json())
	.then(json => showInfo(json));

}

/*
	Returned json is in the following format:
	{"Title":"Jaws","Year":"1975","Rated":"PG","Released":"20 Jun 1975",
	  "Runtime":"124 min","Genre":"Adventure, Drama, Thriller",
	  "Director":"Steven Spielberg","Writer":"Peter Benchley (screenplay), Carl Gottlieb (screenplay), Peter Benchley (based on the novel by)",
	  "Actors":"Roy Scheider, Robert Shaw, Richard Dreyfuss, Lorraine Gary",
	  "Plot":"When a killer shark unleashes chaos on a beach resort, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.","Language":"English","Country":"USA","Awards":"Won 3 Oscars. Another 11 wins & 18 nominations.",
	  "Poster":"https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
	  "Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"97%"},
	  {"Source":"Metacritic","Value":"87/100"}],"Metascore":"87","imdbRating":"8.0","imdbVotes":"504,437","imdbID":"tt0073195","Type":"movie","DVD":"11 Jul 2000","BoxOffice":"N/A","Production":"Universal Pictures","Website":"http://www.jaws25.com/","Response":"True"}
*/


showInfo = function(info){

	display = "Sunrise is " + info.sunrise + "Sunset is " + info.sunset;
	document.getElementById("info").innerHTML = display;
}