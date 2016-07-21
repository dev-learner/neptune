<?php

$connected = mysqli_connect('localhost:3306', 'root', 'rMPYFir6', 'neptuneschema');
$sql = "SELECT name, description, price, showextras FROM products WHERE categoryid = 11";

$results = mysqli_query($connected,$sql);

echo <<<EOD
<table>
    <col width='236'>
    <col width='356'>
    <col width='60'>
    <col width='20.5'>
    <tr>
        <th>Item</th>
        <th>Description</th>
        <th>Cost</th>
        <th>Add</th>
    </tr>
EOD;

while($row = mysqli_fetch_array($results)){
    $name=$row['name'];
    $desc=$row['description'];
    $price=$row['price'];
    $showextras=$row['showextras'];

echo <<<EOD
    <tr>
        <td>$name</td>
        <td>$desc</td>
        <td>$price</td>
        <td><b href='#' onClick='additem("$name", "$desc", "$price", "$showextras")'><img class='ordbut' src='img/add.png'></b></td>
    </tr>
EOD;
    
    } // end while

echo <<<EOD
</table>
EOD;

mysqli_close($connected);

?>