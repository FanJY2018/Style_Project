<?php
require_once("../init.php");
	$sql = "SELECT * FROM img_story";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_all($result,1);
	$output["img_story"]=$row;
	echo json_encode($output);