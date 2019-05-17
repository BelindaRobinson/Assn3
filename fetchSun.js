//fetchs the lng and lat from the fetchSun.php file and adds it to the sunrise and sunset url to get that information for website, response is in json
getSunInfo = function(locLat, locLng){

    fetch("fetchsun.php?lat=" + locLat + "&lng=" + locLng + "&date=today")

	.then(response => response.json())
	.then(json => showInfo(json));

}