<!DOCTYPE HTML>
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Specials</title>
	<link rel="icon" type="image/x-icon" href="./img/nep.ico" >
	<link rel="stylesheet" type="text/css" href="css/nep_style.css" />

</head>

<body>

<?php
	include 'inc/header.inc';		//	<!-- header code -->
	include 'inc/footer.inc';		//	<!-- footer code -->
	include 'inc/functions.inc';	//	<!-- required php functions file -->
	
	set_error_handler("customError", E_ALL);

	$connected = ConnectTo("neptuneschema");
    echo "<div class='menu_categories'>";
    echo "Connected to neptuneschema";
    echo "</div>";
	mysqli_close($connected);
?>

<div class="admins">
	<a href="./admin/admin_categories.php" title="Select to add a new category, e.g. Salads, Drinks, etc..">New Category</a></br>
	<a href="./admin/admin_menu.php">Edit Menu</a></br>
    <a href="./admin/H5_LocalStorage.html">Local Storage Test Page 2</a></br>
    <a href="./admin/jstutorial.html">Javascript Tutorial</a></br>

</div>


<div class="menu_table">

</div>

</body>

</html>



