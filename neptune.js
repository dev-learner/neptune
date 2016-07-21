var debugScript = false;
var Alert = new CustomAlert();


//if the page has scrolled down past the menu bar then fix the menu bar to the top of the page using the menuFixed class
$(window).bind('scroll', function(){
    if ($(window).scrollTop() > $('header').height() && window.innerWidth > 920) {
        $('.menuBar').addClass('menuFixed');
    } else {
        $('.menuBar').removeClass('menuFixed');
    }
});


$(window).bind("load", function() {
   gettable();
});

function gettable() {

    var datacount = localStorage.length;
    if (datacount > 0){
        var render = "<col width='236'>";
            render += "<col width='20.5'>";
            render += "<col width='60'>";
            render += "<col width='20.5'>";
            render += "<tbody>";
            render += "<tr>";
            render += "<th colspan='4'>Orders</th>";
            render += "</tr>";
            render += "<tr>";
            render += "<td scope='col' style='text-align: center'>Item</td>";
            render += "<td scope='col' style='text-align: center'>Qty</td>";
            render += "<td scope='col' style='text-align: center'>Cost</td>";
            render += "<td scope='col' style='text-align: center'>Del</td>";
            render += "</tr>";
                
        for (i = 0; i < datacount; i++) {
            var key = localStorage.key(i); //Get  the Key
            var order = localStorage.getItem(key); //Get Data from Key
            var data = JSON.parse(order); //Parse the Data back into the object
           
            render += "<tr><td class='ordent'>" + data.Item + "</td>";
            render += "<td class='ordent'>" + data.Qty + " </td>";
            render += "<td class='ordent'>" + data.Cost + "</td>";
            render += "<td><span href='#' onClick='deleteitem(this)'><img class='ordbut' src='img/rem.png'></span></td>";
        }
            render += "<tr>";
            render += "<td>Total</td>";
            render += "<td id='tqty' style='text-align: center'></td>";
            render += "<td id='tcost' colspan='2' style='text-align: center'></td>";
            render += "</tr>";
            render += "</tbody>";
        
        window.document.getElementsByClassName("orders").innerHTML = render;
    }   
    else{
        var render = "<col width='236'>";
            render += "<col width='20.5'>";
            render += "<col width='60'>";
            render += "<col width='20.5'>";
            render += "<tbody>";
            render += "<tr>";
            render += "<th colspan='4'>Orders</th>";
            render += "</tr>";
            render += "<tr>";
            render += "<td scope='col' style='text-align: center'>Item</td>";
            render += "<td scope='col' style='text-align: center'>Qty</td>";
            render += "<td scope='col' style='text-align: center'>Cost</td>";
            render += "<td scope='col' style='text-align: center'>Del</td>";
            render += "</tr>";
            render += "<tr>";
            render += "<td>Total</td>";
            render += "<td id='tqty' style='text-align: center'></td>";
            render += "<td id='tcost' colspan='2' style='text-align: center'></td>";
            render += "</tr>";
            render += "</tbody>";
        
            window.document.getElementsByClassName("orders").textContent = render;            
//        document.getElementsByClassName("orders").textContent = "Your Order will appear here...";
    }
}

function additem(name, description, price, showextras) {

    if(showextras=='1'){
        displayextras();
    }

    var table = window.document.getElementsByClassName("orders");

    //showProperties(table);
    
    // insety a new row at row 2 and call it 'row':
    var row = table.insertRow(2);
    
    // insert 1st cell in 'row' and enter product name:
    var item = row.insertCell(0);
    item.innerHTML = name;
    item.className = 'ordent';

    // insert 2nd cell in 'row', enter quantity and align it center:    
    var qty = row.insertCell(1);
    qty.innerHTML = 1;
    qty.style.textAlign = 'center';
    qty.className = 'ordent';

    // insert 3rd cell in 'row' and enter price:
    var cost = row.insertCell(2);
    cost.innerHTML = price;
    cost.className = 'ordent';
    
    // insert 4th cell in 'row' and remove functionality:
    row.insertCell(3).innerHTML = "<span href='#' onClick='deleteitem(this)'><img class='ordbut' src='img/rem.png'></span>";
//    row.insertCell(3).innerHTML = "<span href='#' onClick='deleteitem(this)'><img class='ordbut' src='../img/rem.png'></span>";

    // sum the totals:
    finishTable();
    
    //Save it to local storage

}



function displayextras(){
    var Xtras;
    if (window.XMLHttpRequest){ // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else{ // code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            Xtras = xmlhttp.responseText;
            Alert.render(Xtras);
        }
    }
    xmlhttp.open("GET", "getextras.php",true);
    xmlhttp.send();
}

function deleteitem(t) {
    var row = t.parentNode.parentNode;
    document.getElementsByClassName("orders").deleteRow(row.rowIndex);
    finishTable();
    console.log(row);
   }


function initialize() {
	var map_canvas = document.getElementById('map_canvas');
    var map_options = {
		center: new google.maps.LatLng(52.637016, 1.234315),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        }
	var map = new google.maps.Map(map_canvas, map_options)
}
google.maps.event.addDomListener(window, 'load', initialize);


function CustomAlert(){
    
    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        var dialogboxbody = document.getElementById('dialogboxbody')
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";

        dialogbox.style.left = (winW/2) - (550 * .5)+"px";
        dialogbox.style.top = "10px";
        dialogbox.style.display = "block";
        dialogbox.style.height = winH - 20+"px";

        dialogboxbody.style.height = winH - 165+"px";
        
        document.getElementById('dialogboxhead').innerHTML = "Would you like extra toppings?";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
    }
    
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}

      
function CheckCategoryData(){
	var Category = document.getElementsByName("Category").value;
	var CategPic = document.getElementById("Mediafile").value;

	if (Category=null){
		alert("You must enter a new category name");
		return false;
	}
	
	if (CategPic=null){
		alert("You must select a picture for this category");
		return false;
	}

	return true;
}


function showProperties (theObject){
   for (var i in theObject) {
      if (theObject[i] != null) {
          document.write(i + " : " + theObject[i] + "<br>");
          console.log(i + " : " + theObject[i] + "<br>");
      }
      else {
         console.log(i + "<br>");
      }
   }
   return;
}


function computeTableColumnTotal(tableId, colNumber){
// find the table with id attribute tableId
// return the total of the numerical elements in column colNumber
// skip the top row (headers) and bottom row (where the total will go)

    var result = 0;

    try{
        var tableElem = window.document.getElementById(tableId); 		   
        var tableBody = tableElem.getElementsByTagName("tbody").item(0);
        var i;
        var howManyRows = tableBody.rows.length;
    
        // skip first two and last rows (hence i=2, and howManyRows-2):
        for (i=2; i<(howManyRows-2); i++){
            var thisTrElem = tableBody.rows[i];
            var thisTdElem = thisTrElem.cells[colNumber];			
            var thisTextNode = thisTdElem.childNodes.item(0);

            if (debugScript){
                window.alert("text is " + thisTextNode.data);
            } // end if

            // try to convert text to numeric
            var thisNumber = parseFloat(thisTextNode.data);

            // if you didn't get back the value NaN (i.e. not a number), add into result
            if (!isNaN(thisNumber))
            result += thisNumber;
        } // end for

    } // end try

    catch (ex){
        window.alert("Exception in function computeTableColumnTotal()\n" + ex);
        result = 0;
    }
    finally{
        return result.toFixed(2);
    }
}

//
function finishTable(){
    if (debugScript)
        window.alert("Beginning of function finishTable");

    var tableElemName = "orders";

    var tqty = Math.round(computeTableColumnTotal("orders",1));
    var tcost = computeTableColumnTotal("orders",2);

    try{
        var tqtyElem = window.document.getElementById("tqty");
        tqtyElem.innerHTML = tqty;

        var tcostElem = window.document.getElementById("tcost");
        tcostElem.innerHTML = tcost;
    }
    catch (ex){
        window.alert("Exception in function finishTable()\n" + ex);
    }
    return;
}


/*

// ---------- ARRAYS ----------
// Arrays have variable sizes and can contain multiple types in JS
var tomSmith = ["Tom Smith", "123 Main", 120.50];
 
// Access first array item
document.write("1st State : ", tomSmith[0], "<br />");
 
// Add an item
tomSmith[3] = "tsmith@aol.com";
 
// Overwrite index 2 and fit everything else after index 2 without
// overwriting (Put 0 for second parameter to not overwrite)
tomSmith.splice(2, 1, "Pittsburgh", "PA");
 
// Delete the 4th index item
tomSmith.splice(4,1);
 
// Convert an array into a string (Also use toString())
document.write("Array : ", tomSmith.valueOf(), "<br />");
 
// Convert an array into a string with separator
document.write("Array : ", tomSmith.join(", "), "<br />");
 
// Delete an index
delete tomSmith[3];
 
// Sort an array (reverse() for reverse sort)
// Works for sorting strings
tomSmith.sort();
 
// Sort numbers
var numbers = [4,3,9,1,20,43];
 
// Descending sort return y - x
numbers.sort(function(x,y){ return x - y });
document.write("Num Array : ", numbers.toString(), "<br />");
 
// Combine arrays
var combinedArray = numbers.concat(tomSmith);
 
// Remove the last item
tomSmith.pop();
 
// Add items to the end
tomSmith.push("555-1212", "US");
 
// Deletes the first item
tomSmith.shift();
 
// Adds item to the first index
tomSmith.unshift("Tom Smith");
 
for (var i = 0; i < tomSmith.length; i++) {
  document.write(tomSmith[i], "<br />");
}
 

*/
