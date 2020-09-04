<?php
header('Content-Type:application/json');
header('Access-Control-Allow-Methods:GET');
header('Access-Control-Allow-Origin:*');


require_once("conn/dbcon.php");

try{

$per_part=5;
$quer1="SELECT * FROM crud ORDER BY id DESC";
$connq1=$conn->prepare($quer1);
$connq1->execute();
$total=$connq1->rowCount();

$to=ceil($total/$per_part);

if(isset($_GET['page']))
{
    $page=$_GET['page'];
}
else
{
    $page=1;
}
$offset=($page-1)*$per_part;

$quer="SELECT * FROM crud ORDER BY id DESC LIMIT $offset,$per_part";
$connq=$conn->prepare($quer);
$connq->execute();
if($connq->rowCount()>0)
{
    $output=$connq->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($output,JSON_PRETTY_PRINT);
       
}
else 
{
    $output=json_encode(array(
              "message"=>"cant find any records",
              "status"=>"false"
                ));
    echo $output;        
}
$conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e)
{
   echo $e->getMessage();
}



?>