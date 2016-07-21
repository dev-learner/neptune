<?php

function showmenu(){
    $connected = mysqli_connect('localhost:3306', 'root', 'rMPYFir6', 'neptuneschema');
    $sql = "SELECT name, description, price, showextras FROM products ORDER BY categoryid, name, price ASC";
    $results = mysqli_query($connected,$sql);
    
echo <<<EOD
<div class='left'>
    <table class='tleft'>
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
        <td><span href='#' onClick='additem("$name", "$desc", "$price", "$showextras")'><img class='ordbut' src='img/add.png'></span></td>
        </tr>
EOD;
    }

echo <<<EOD
    </table>
</div>
EOD;

    mysqli_close($connected);

}


function showextras($connected,$sql){
    $results = mysqli_query($connected,$sql);
    showitems($results);
}


function showitems($results){
echo <<<EOD
<div class='left'>
    <table class='tleft'>
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
        <td>'$name'</td>
        <td>'$desc'</td>
        <td>'$price'</td>
        <td><span href='#' onClick='additem("$name", "$desc", "$price", "$showextras")'><img class='ordbut' src='img/add.png'></span></td>
        </tr>
EOD;
    }

echo <<<EOD
    </table>
</div>
EOD;
}

    
function showorders(){
    echo "<div class='right'>";
        echo "<table class='tright' id='ordertab'>";
            echo "<col width='236'>";
            echo "<col width='20.5'>";
            echo "<col width='60'>";
            echo "<col width='20.5'>";
            echo "<tbody>";
            echo "<tr>";
            echo "<th colspan='4'>Orders</th>";
            echo "</tr>";
            echo "<tr>";
            echo "<td scope='col' style='text-align: center'>Item</td>";
            echo "<td scope='col' style='text-align: center'>Qty</td>";
            echo "<td scope='col' style='text-align: center'>Cost</td>";
            echo "<td scope='col' style='text-align: center'>Del</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>Total</td>";
            echo "<td id='tqty' style='text-align: center'></td>";
            echo "<td id='tcost' colspan='2' style='text-align: center'></td>";
            echo "</tr>";
            echo "<tr>";
//            echo "<td  colspan='4'><input id='btnsave' type='button' value='Save' /> <input id='btnclear' type='button' value='Clear' /> <input id='btnclearstorage' type='button' value='Clear Storage' /></td>";
            echo "<td  colspan='4'><input id='btnsave' type='button' value='Save' /> <input id='btnclearstorage' type='button' value='Clear Storage' /></td>";
            echo "</tr>";
            echo "</tbody>";
        echo "</table>";
    echo "</div>";
}


function getCategories($category){
    $connected = ConnectTo("neptuneschema");

    if($connected){                
        echo "<div class='left'>";
            echo "<table class='tleft'>";
                echo "<col width='236'>";
                echo "<col width='356'>";
                echo "<col width='60'>";
                echo "<col width='20.5'>";
                echo "<tr>";
                echo "<th>Item</th>";
                echo "<th>Description</th>";
                echo "<th>Cost</th>";
                echo "<th>Add</th>";
                echo "</tr>";
                
                $results = mysqli_query($connected,"SELECT name, description, price FROM products WHERE categoryid = $category ORDER BY productid");
                while($row = mysqli_fetch_array($results)){
                    $item=$row['name'];
                    $price=$row['price'];
                    echo "<tr>";
                    echo "<td>" . $row['name'] . "</td>";
                    echo "<td>" . $row['description'] . "</td>";
                    echo "<td>" . $row['price'] . "</td>";
                    echo "<td><span href='#' onClick='additem(\"$item\", \"$price\")'><img class='ordbut' src='img/add.png'></span></td>";
                    echo "</tr>";
                }				
            echo "</table>";
        echo "</div>";

        echo "<div class='right'>";
            echo "<table class='tright' id='ordertab'>";
                echo "<col width='236'>";
                echo "<col width='20.5'>";
                echo "<col width='60'>";
                echo "<col width='20.5'>";
                echo "<tr>";
                echo "<th colspan='4'>Orders</th>";
                echo "</tr>";
                echo "<tr>";
                echo "<td style='text-align: center'>Item</td>";
                echo "<td style='text-align: center'>Qty</td>";
                echo "<td style='text-align: center'>Cost</td>";
                echo "<td style='text-align: center'>Del</td>";
                echo "</tr>";
                echo "<tr>";
                echo "<td>Total</td>";
                echo "</tr>";
            echo "</table>";
        echo "</div>";
            
    mysqli_close($connected);
    } // end if($connected)
} // end function getCategItems


function CustomError($errlevel, $errstr, $errfile, $errline, $errcontx){		
    switch ($errlevel){
        case 0:
            echo "A zero error?";
            return true;
            break;
            
        case 8:
//			echo $errlevel;
            break;
            
        default:
            echo "<span>Error:</span><br>
            Level = $errlevel<br>
            Message = $errstr<br>
            File = $errfile<br>
            Line = $errline<br>
            Context = $errcontx<br><br>";
            die("Error caught in handler!");
    } // end of: switch ($errlevel)
    
} // end of: error handler function


function ConnectTo($database){
// The following connection is for local dev:
   $connect = mysqli_connect("127.0.0.1:3306", "root", "rMPYFir6", $database);

// Comment out the following 4 lines for local dev:
//    $host_name  = "db632758957.db.1and1.com";
//    $database   = "db632758957";
//    $user_name  = "dbo632758957";
//    $password   = "rMPYFir6";

//    $connect = mysqli_connect($host_name, $user_name, $password, $database);
    switch (mysqli_connect_errno()){
        case 0:
            break;			
        case 1049:
            die(mysqli_connect_error() . " - No Action Taken");
            
        default:
            echo "<span>Error:</span><br>
            Level = " . mysqli_connect_errno() . "<br />
            Message = " . mysqli_connect_error() . "<br />";
            die("Error caught in handler!");
    } // end of: switch ($errlevel)		
    return $connect;
} // end of: connect function
?>

