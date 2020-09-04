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
$getfname=$id['fname'];
$getlname=$id['lname'];
$quer="UPDATE crud SET fname=?,lname=? WHERE id=?";
$connq=$conn->prepare($quer);
$connq->execute(array($getfname,$getlname,$getid));
$conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
$output=json_encode(array(
    "message"=>"Record has been updated!",
    "status"=>true
));
echo $output;  
}
catch(PDOException $e)
{
    $output=json_encode(array(
        "message"=>"Something went wrong! try again",
        "status"=>false
));
echo $output;  
}



?>