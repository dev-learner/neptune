<!doctype html>
<html class="no-js" lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Neptune | Our Team</title>
	<link rel="icon" type="image/x-icon" href="./img/nep.ico" >
	<link rel="stylesheet" type="text/css" href="css/nep_style.css" />
</head>

<body>

<?php include 'inc/header.inc';?>
<?php include 'inc/errorhandler.inc';?>		<!-- Error handling function -->
<?php include 'inc/connectto.inc'; ?>		<!--ConnectTo db function -->
<?php include 'inc/footer.inc';?>

<div class="admins">
<h1>Reviews</h1>
<p>Please enter the details below, all fields must be completed."</p>
<form action="feedback.php" method="post">
<label for="tswname">Name</label> <input type="text" name="fullname" id="tswname" size="39" /><br />&nbsp;<br />
<label for="tswemail">Email</label> <input type="text" id="tswemail" name="email" size="39" /><br />&nbsp;<br />
<label for="tswcomments">Comments</label><br />&nbsp;<br />
<textarea cols="50" rows="4" name="comments" id="tswcomments"></textarea>
<br />&nbsp;<br />
<input type="submit" value="Send Feedback" />
</form>
</div)
</body>

</html>
