var geocoder;
function initialiseGeocoder() {
	geocoder = new Geocoder();
	setMap();
}

getGeo = function(){
    var locationsearch = document.getElementById("location").nodeValue;

    var geocode_request = {
		address : location		
		}

        var locationsearch = document.getElementById("location").nodeValue;
        if (locationsearch !=""){
            var url = "http://www.mapquestapi.com/geocoding/v1/address?key=Y4Eyw8OunK8ompYr9UmOJAnBNYJjNj5f&location=id"
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
            city.innerHTML = response;
        }
    
        function handleError(errStat){
            alert("this isnt working" + errStat);
        }

    }

    showLocation = function(result){
    
}

	

