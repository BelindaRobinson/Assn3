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
            //var url = "http://www.mapquestapi.com/geocoding/v1/address?key=Y4Eyw8OunK8ompYr9UmOJAnBNYJjNj5f&id=location"
            //var url = "http://www.mapquestapi.com/geocoding/v1/address="+document.getElementById("location").value"&key=PjfqeylGoUsNXJoZPO7DOR8qgfoYk4Hw"
            var url = "http://www.mapquestapi.com/geocoding/v1/address?key=PjfqeylGoUsNXJoZPO7DOR8qgfoYk4Hw&location="+document.getElementById("location").value;
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
        let index = "https://www.mapquestapi.com/geocoding/v1/address?key=PjfqeylGoUsNXJoZPO7DOR8qgfoYk4Hw&inFormat=kvp&outFormat=json&location="+document.getElementById("location").value;
	
	imgsrc = result[index];
	imglocation = document.getElementById("place");
	imglocation.src = imgsrc;

    }
 //change around places and location to see if works
    
    

    /*showLocation = function(data){
        var url = "https://www.mapquestapi.com/geocoding/v1/address?key=PjfqeylGoUsNXJoZPO7DOR8qgfoYk4Hw&inFormat=kvp&outFormat=json&location="+document.getElementById("location").value;
        window.open(url);
        $.getJSON(url, function(data){
            if(data.status == "OK"){
                var formattedAddress = data.results[0].formatted_address;
                var latitude = data.results[0].geometry.location.lat;

                $.each(data.results[0].address_components, function(index, element){
                    if(element.types == "postal_code"){
                        postcode = element.long_name;
                        return false;
                    }
                })
            }
            window.alert(data.status)

        });
        //var url = "http://www.mapquestapi.com/geocoding/v1/address?key=PjfqeylGoUsNXJoZPO7DOR8qgfoYk4Hw&location="+document.getElementById("location").value;
        
        //locationsearch.src = url; 
    
    } */

	

