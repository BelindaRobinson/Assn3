<?php
    //get the following information to add to the url
    $api = urlencode($_GET["api"])
    $lat = urlencode($_GET["lat"]);
    $lng = urlencode($_GET["lng"]);
    
    //url for api with lat and lng included, lat and lng are from the geocoding 
    $url = "https://api.openweathermap.org/data/2.5/weather?lat=" . $lat . "&lon=" . $lng . "&appid=" . $api; 
 
  	$process = curl_init($url);
	
	curl_setopt($process,CURLOPT_SSL_VERITYHOST, FALSE);
	curl_setopt($process,CURLOPT_SSL_VERITYPEER, FALSE);
  	curl_setopt($process, CURLOPT_RETURNTRANSFER, TRUE);
      $return = curl_exec($process);
      curl_close($process);
    
      $xml = simplexml_load_string($return) or die("error");
      header("Content-type: application/xml");
      echo $xml->asXML();

	?>