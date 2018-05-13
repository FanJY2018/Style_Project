<?php
require_once("../init.php");
@$pid = $_REQUEST["pid"];
$sql = "select * from img_product where pid=$pid";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_all($result,1);
$output["img_product"]=$row;
echo json_encode($output);
?>