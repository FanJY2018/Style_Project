<?php
require_once("../init.php");
	$sql = "SELECT * FROM img_index where pid<23 And pid>10";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_all($result,1);
	$output["fishion"]=$row;
	echo json_encode($output);