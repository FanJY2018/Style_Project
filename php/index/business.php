<?php
require_once("../init.php");
	$sql = "SELECT * FROM img_index where pid>25 AND pid<=30";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_all($result,1);
	$output["business"]=$row;
	echo json_encode($output);