<?php 
	$server = "sql7.freemysqlhosting.net";
	$username = "sql7364943";
	$password = "6JpmkKEMNF";
	$db = "sql7364943";

  $con = mysqli_connect($server,$username,$password,$db);
  $resultset = mysqli_query($con, "SELECT * FROM produits");
  $json_array = array();

  while ($row = mysqli_fetch_assoc($resultset))
  {
    $json_array[]= $row;
  }

  
  print(json_encode($json_array));
?>