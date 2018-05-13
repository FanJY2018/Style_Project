<?php
require_once("../init.php");
	$sql = "SELECT * FROM img_index where pid<=10 OR pid>=23 AND pid<=25";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_all($result,1);
	$output["landscape"]=$row;
	echo json_encode($output);
	
