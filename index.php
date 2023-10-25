<?php
 $conn = new mysqli("localhost","root","","react_php_registration");
 if(mysqli_connect_error()){
     echo mysqli_connect_error();
     exit();
 }
 else{
    $name=$_POST['name'];
    $mobile=$_POST['mobile'];
    $email=$_POST['email'];

    $sql="INSERT INTO enquery (name, mobile, email) VALUES ('$name', '$mobile', '$email');";
    $res = mysqli_query($conn, $sql);
    if($res){
        echo "success";
    }
    else{
        echo "error";
    }  

    $conn->close();
 }

?>