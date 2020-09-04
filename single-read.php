<?php
header('Content-Type:application/json');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Access-Control-Allow-Methods,Content-Type,Authorization,X-Requested-With');

require_once("conn/dbcon.php");

try
{
$id=json_decode(file_get_contents('PHP://INPUT'),true);   
$getid=$id['id']; 
$quer="SELECT * FROM crud WHERE id=? ORDER BY id DESC ";
$connq=$conn->prepare($quer);
$connq->execute(array($getid));
if($connq->rowCount()>0)
{
    $output=$connq->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($output,JSON_PRETTY_PRINT);
}
else 
{
    $output=json_encode(array(
              "message"=>"cant find record",
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