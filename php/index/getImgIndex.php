<?php
require_once("../init.php");
$sql="select * from img_index";
$result = mysqli_query($conn,$sql);
$row=mysqli_fetch_all($result,1);
$output["imgIndex"]=$row;
echo json_encode($output);
?>