<?php
function CustomError($errlevel, $errstr, $errfile, $errline, $errcontx){
	
	switch ($errlevel){
		case 0:
			echo "A zero error?";
			return true;
			break;
			
		case 8:
			break;
			
		default:
			echo "<b>Error:</b><br>
			Level = $errlevel<br>
			Message = $errstr<br>
			File = $errfile<br>
			Line = $errline<br>
			Context = $errcontx<br><br>";
			die("Error caught in handler!");
	} // end of: switch ($errlevel)
	
} // end of: error handler function

 ?>
