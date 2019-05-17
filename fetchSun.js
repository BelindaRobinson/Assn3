
getSunInfo = function(locLat, locLng){

    fetch("fetchsun.php?lat=" + locLat + "&lng=" + locLng + "&date=today")

	.then(response => response.json())
	.then(json => showInfo(json));

}