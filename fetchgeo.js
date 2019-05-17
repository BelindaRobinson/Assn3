//this initialises the geocoder and set its to a map
var geocoder;
function initialiseGeocoder() {
	geocoder = new Geocoder();
	setMap();
}

//this function gets the information inputed from the html and turns it into a value to be used in the url 
getGeo = function(){
    var locationsearch = document.getElementById("location").value;
    
    var geocode_request = {
		address : location		
		}
        
        var locationsearch = document.getElementById("location").value;
        //this ,nz is added on to each city name that is added in so that only nz city are shown
        locationsearch += ",NZ";
        
        if (locationsearch !=""){

            
            //below is the url for the geocode which the added location input from the user added so the right place is found
            var url = "https://www.mapquestapi.com/geocoding/v1/address?key=Y4Eyw8OunK8ompYr9UmOJAnBNYJjNj5f&inFormat=kvp&outFormat=json&location=" + locationsearch + "&thumbMaps=false"
          //alert (locationsearch);
           //alert(url);
           //fetch get method and json response formated is added here
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
        // handles any errors and gives an alert if there is one
        function handleError(errStat){
            alert("this isnt working" + errStat);
        }

    }

    //below displays the location using the lat and lng and sets it to the map
    showLocation = function(result){
        
        var locLat = result.results[0].locations[0].latLng.lat;
        var locLng = result.results[0].locations[0].latLng.lng;
        mymap.panTo(new L.LatLng(locLat, locLng));
        getSunInfo(locLat, locLng);

    	//alert(result.results[0].locations[0].latLng.lat);
    	//mymap.panTo(new L.LatLng(result.results[0].locations[0].latLng.lat, result.results[0].locations[0].latLng.lng));
	
}

//fetchs the lng and lat from the fetchSun.php file and adds it to the sunrise and sunset url to get that information for website, response is in json
getSunInfo = function(locLat, locLng){

    fetch("fetchsun.php?lat=" + locLat + "&lng=" + locLng + "&date=today")

	.then(response => response.json())
	.then(json => showInfo(json));

}

//uses the sunset id from the html and displays the sunrise and sunset information from the location given in the geocode part
showInfo = function(result){
    
    let sunrise = result.results.sunrise;
    let sunset = result.results.sunset;
    display = "Sunset " + sunset + "<br>sunrise " + sunrise;
    document.getElementById("sunset").innerHTML = display;
	//document.getElementById("sunset").innerHTML = result.results.sunset;
	//document.getElementById("sunrise").innerHTML = result.results.sunrise;

}

//using an ajax to get the weather informaion from the ajaxWeather.php file
getWeatherInfo = function(result){

    let Lat = result.results[0].locations[0].latLng.lat;
    let Lng = result.results[0].locations[0].latLng.lng;

    request = new XMLHttpRequest();
    url = "ajaxWeather.php?key=" + api + "&lat=" + Lat + "&lng=" + Lng;
    request.open("GET", url);
    request.onreadystatechange = function(){
        if(request.readyState == 4){
            if(request.status == 200){
                result = request.responseText;
                showWeatherInfo(result);
            }
        }
    };
    request.send();    
}

//displaying the weather information 
showWeatherInfo = function(info){
    
}
