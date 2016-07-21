<?php
function ConnectTo($db){

	$con = mysqli_connect("127.0.0.1:3308", "root", "rMPYFir6", $db);
	switch (mysqli_connect_errno()){
		case 0:
			break;			
		case 1049:
			die(mysqli_connect_error() . " - No Action Taken");
			
		default:
			echo "<b>Error:</b><br>
			Level = " . mysqli_connect_errno() . "<br />
			Message = " . mysqli_connect_error() . "<br />";
			die("Error caught in handler!");
	} // end of: switch ($errlevel)		

	return $con;
	
} // end of: connect function
?>