<?php

    $lat = urlencode($_GET["lat"]);
    $lng = urlencode($_GET["lng"]);

	//$apikey = $_GET["key"];
    //$title = urlencode($_GET["title"]);
    
    $url = "https://api.sunrise-sunset.org/json?lat=" . $lat . "&lng=" . $lng . "&date=today";

	//$url = "http://www.omdbapi.com/?t=" . $title . "&apikey=".$apikey;
	//default return type is json
 
  	$process = curl_init($url);
  
  	curl_setopt($process, CURLOPT_RETURNTRANSFER, TRUE);
  	$return = curl_exec($process);

  	echo $return;

  
  	curl_close($process);