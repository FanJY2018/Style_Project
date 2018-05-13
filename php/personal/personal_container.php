<?php
require_once('../init.php');
@$pid = $_REQUEST["pid"];
$sql = "SELECT pid,url,title,price,personal_date,style FROM img_personal WHERE pid=$pid";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_all($result,1);
$output["personal_container"]  = $row;
echo json_encode($output);
?>