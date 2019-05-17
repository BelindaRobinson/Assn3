var geocoder;
function initialiseGeocoder() {
	geocoder = new Geocoder();
	setMap();
}

getGeo = function(){
    var locationsearch = document.getElementById("location").value;
    
    var geocode_request = {
		address : location		
		}
        
        var locationsearch = document.getElementById("location").value;
        locationsearch += ",NZ";
        
        if (locationsearch !=""){

            

            var url = "https://www.mapquestapi.com/geocoding/v1/address?key=Y4Eyw8OunK8ompYr9UmOJAnBNYJjNj5f&inFormat=kvp&outFormat=json&location=" + locationsearch + "&thumbMaps=false"
          //alert (locationsearch);
           //alert(url);
            fetch(
                url,
                {method: 'GET'}            
            )           
            .then(response => response.json())
            .then(json => showLocation(json))
            .then(processResult, handleError)
        }
        function processResult(response){
            var city = document.getElementById("location");
            city.innerHTML = "ss";
        }
    
        function handleError(errStat){
            alert("this isnt working" + errStat);
        }

    }

    showLocation = function(result){
        
        var locLat = result.results[0].locations[0].latLng.lat;
        var locLng = result.results[0].locations[0].latLng.lng;
        mymap.panTo(new L.LatLng(locLat, locLng));
        getSunInfo(locLat, locLng);

    	//alert(result.results[0].locations[0].latLng.lat);
    	//mymap.panTo(new L.LatLng(result.results[0].locations[0].latLng.lat, result.results[0].locations[0].latLng.lng));
	
}


getSunInfo = function(locLat, locLng){

    fetch("fetchsun.php?lat=" + locLat + "&lng=" + locLng + "&date=today")

	.then(response => response.json())
	.then(json => showInfo(json));

}

showInfo = function(result){
    
    let sunrise = result.results.sunrise;
    let sunset = result.results.sunset;
    display = "Sunset " + sunset + "<br>sunrise " + sunrise;
    document.getElementById("sunset").innerHTML = display;
	//document.getElementById("sunset").innerHTML = result.results.sunset;
	//document.getElementById("sunrise").innerHTML = result.results.sunrise;

}
	
getWeatherInfo = function(locLat, locLng){
    request = new XMLHttpRequest();
    url = "ajaxWeather.php?lat=" + locLat + "&lng=" + locLng;
    request.open("GET", url);
    request.onreadystatechange = function(){
        if(request.readyState == 4){
            if(request.status == 200){
                result = request.responseText;
                showWeather(result);
            }
        }
    }
}
