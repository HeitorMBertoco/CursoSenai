<?php
for ($i = -5; $i <= 1; $i++){
    $poke = rand(1, 1025);
    $file = file_get_contents("https://pokeapi.co/api/v2/pokemon/$poke");
    $abc = json_decode($file, true);
    
    print "<pre>";
    print_r($abc["forms"][0]["name"]);
    print("<br>");
    print_r($abc["abilities"][0]["ability"]["name"]);
    print("<br>");
    print_r(isset($abc["abilities"][1]["ability"]["name"]) ? $abc["abilities"][1]["ability"]["name"] : '');
    print("<br>");
    print_r(isset($abc["abilities"][2]["ability"]["name"]) ? $abc["abilities"][2]["ability"]["name"] : '');
    print("<br>");
    print("<br>");
    print "</pre>";
}

?> 