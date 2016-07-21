<!DOCTYPE HTML>
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Menu</title>
	<link rel="icon" type="image/x-icon" href="./img/nep.ico" >
	<link rel="stylesheet" type="text/css" href="css/nep_style.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="js/neptune.js"></script>
    <script src="modernizr.min.js"></script> <!-- Paul look for the API! :) -->



</head>

<body>

<?php
//phpinfo();
	include 'inc/header.inc';	//	<!-- header code -->
	include 'inc/footer.inc';		//	<!-- footer code -->
	include 'inc/functions.inc';	//	<!-- required php functions file -->
	
	set_error_handler("customError", E_ALL);

    showmenu();

?>

<div id="orderdiv"><table class='orders'></table></div>

<!-- <?php showorders();?> -->


    
<!-- <script src="js/neptunestorage.js"></script> -->
<select id="databases"></select>
<div id="dialogoverlay"></div>
<div id="dialogbox">
  <div>
    <div id="dialogboxhead"></div>
    <div id="dialogboxbody"></div>
    <div id="dialogboxfoot"></div>
  </div>
</div>
</body>

<!--

A sample php class:
    class foo
    {
    public $var="bar";
    }
    $var2 = new foo();
    echo $var2->var;
    echo " We are here!";

    
The following code builds the tabbed horizontal menu:
    $connected = ConnectTo("neptuneschema");
		$results = mysqli_query($connected,"SELECT * FROM categories ORDER BY categoryid");
			echo "<div class='menu_categories'>";
			echo "<ul>";
			while($row = mysqli_fetch_array($results)){
                $id = $row['categoryid'];
                $cat = $row['name'];
                
                echo "<li><a href=?menu=" . $id . ">" . $cat . "</a></li>";
			}
			echo "</ul>";
	mysqli_close($connected);

if (isset($_GET['menu'])) {
    getCategories($_GET["menu"]);
  }
-->
</html>
