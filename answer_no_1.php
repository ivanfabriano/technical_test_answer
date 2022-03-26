<?php
	function getUrl($d) {
	  $temp = [];
	  for($x=0 ; $x<count($d); $x++){
	    array_push($temp, $d[$x]['image']['url']);
	  }
	  return $temp;
	}
	
	var_dump(getUrl($data)); 

?>
