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
        
    	//alert(result.results[0].locations[0].latLng.lat);
    	mymap.panTo(new L.LatLng(result.results[0].locations[0].latLng.lat, result.results[0].locations[0].latLng.lng));
	
}

	

