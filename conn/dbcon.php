<?php
$hd="mysql:host=localhost;dbname=ajaxcrud";
$user="root";
$password="";

try{
     $conn=new PDO($hd,$user,$password);
     $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e)
{
  echo $e->getMessage();
}
?>