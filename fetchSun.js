getSunInfo = function(){

    let lat = document.getElementsByName("lat").value;
    let lng = document.getElementsByName("lng").value;

    fetch("fetchsun.php?lat=" + lat + "&lng=" + lng + "&date=today")

	.then(response => response.json())
	.then(json => showInfo(json));

}

showInfo = function(info){

	display = info.location + "Currently Sunrise is " + info.sunrise + "Sunset is " + info.sunset;
	document.getElementById("info").innerHTML = display;
}