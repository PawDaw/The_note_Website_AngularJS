<?php

// connection to the database
include_once("connect.php");


     $sql = "Select * FROM person";
     $query = mysqli_query($link,$sql) or die(mysql_error());
     

     $users = array();
    

    while($row = mysqli_fetch_assoc($query)) {
    
        $users[] = $row;
    }
  
 
 
// create JSON file
echo json_encode($users);

     

?>