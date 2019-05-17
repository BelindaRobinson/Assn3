getWeatherInfo = function(locLat, locLng){
    request = new XMLHttpRequest();
    url = "ajaxWeather.php?lat=" + locLat + "&lng=" + locLng;
    request.open("GET", url);
    request.onreadystatechange = function(){
        if(request.readyState == 4){
            if(request.status == 200){
                result = request.responseText;
                showWeatherInfo(result);
            }
        }
    }    
}

showWeatherInfo = function(info){
    let parser = new DOMParser();

    xmlDoc = parser.parseFromString(info,"text/xml");
	
	main = xmlDoc.getElementsByTagName("")[0];

	display = "The movie " + main.getAttribute('title') + " was released in " + main.getAttribute('year') + "<br>PlotSummary: <br>" + main.getAttribute('plot');
	document.getElementById("info").innerHTML = display;
}