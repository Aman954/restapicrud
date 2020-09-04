<?php
header('Content-Type:application/json');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:Access-Control-Allow-Methods,Content-Type,Access-Control-Allow-Headers,X-Requested-With');

require_once("conn/dbcon.php");

try
{
$id=json_decode(file_get_contents('PHP://INPUT'),true);   
$getfname=$id['fname'];
$getlname=$id['lname'];
$quer="INSERT INTO crud(fname,lname) VALUES(?,?)";
$conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
if($connq=$conn->prepare($quer))
{
$connq->execute(array($getfname,$getlname));    
$output=array('message'=>'Record has been inserted!','status'=>true);
echo json_encode($output,JSON_PRETTY_PRINT); 
}
}
catch(PDOException $e)
{
      echo json_encode(array('message'=>'something wrong!','status'=>false)); 
      


}



?>