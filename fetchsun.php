<?php

    $lat = urlencode($_GET["lat"]);
    $lng = urlencode($_GET["lng"]);
    

    $url = "https://api.sunrise-sunset.org/json?lat=" . $lat . "&lng=" . $lng . "&date=today";
 
  	$process = curl_init($url);
  
  	curl_setopt($process, CURLOPT_RETURNTRANSFER, TRUE);
  	$return = curl_exec($process);

  	echo $return;

  
  	curl_close($process);