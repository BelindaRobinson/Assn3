<?php

	//get the following information to add to the url
    $lat = urlencode($_GET["lat"]);
    $lng = urlencode($_GET["lng"]);
    
	//url for api with lat and lng included, lat and lng are from the geocoding. date is displaying the current sunrise and sunset times depanding on the lat and lng location. 
	//sunrise and sunset times are rounf the wrong way this is due to the website being on a utc timeline 
    $url = "https://api.sunrise-sunset.org/json?lat=" . $lat . "&lng=" . $lng . "&date=today";
 
  	$process = curl_init($url);
	
		curl_setopt($process,CURLOPT_SSL_VERITYHOST, FALSE);
		curl_setopt($process,CURLOPT_SSL_VERITYPEER, FALSE);
  	curl_setopt($process, CURLOPT_RETURNTRANSFER, TRUE);
  	$return = curl_exec($process);

  	echo $return;

  
		curl_close($process);

	?>