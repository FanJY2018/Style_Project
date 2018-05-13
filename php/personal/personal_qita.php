<?php
require_once("../init.php");
$sql = "SELECT pid,url,title,price,personal_date,style FROM img_personal";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_all($result,1);
$output["personal_qita"] = $row;
echo json_encode($output);
?>