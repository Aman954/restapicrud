<?php
header('Content-Type:application/json');
header('Access-Control-Allow-Methods:GET');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Access-Control-Allow-Methods,Content-Type,Authorization,X-Requested-With');

require_once("conn/dbcon.php");

try
{
if(isset($_GET['search']))
{
    $ser=$_GET['search'];
}
$quer="SELECT * FROM crud WHERE fname like ? OR lname like ?";
$connq=$conn->prepare($quer);
$connq->execute(array("%$ser%","%$ser%"));
if($connq->rowCount()>0)
{
    $output=$connq->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($output,JSON_PRETTY_PRINT);
}
else 
{
    $output=json_encode(array(
              "message"=>"No record found",
              "status"=>false
    ));
    echo $output;        
}
$conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e)
{
    $output=json_encode(array(
        "message"=>"technical error",
        "status"=>"false"
));
echo $output; 
}



?>