console.log("HELLO FIRST NODE PROJECT");
var fs = require("fs");
 console.log("\n *START* \n");
 
 function myFunction() {


    var table = document.getElementById("myTable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
}
 //var content = fs.readFileSync("december.txt");
 //console.log("Output Content : \n"+ content);
 
		var now = new Date();
		var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		var month = now.getMonth();
		var date = now.getDate();
		if(date<10) date = "0"+date;
		var month = months[month]
		var today = month+""+date;
		
		var url = "";
		
		var request = require('request');
		var url = 'http://makkimasjid.com/pdf/appdata/august.txt';
		request(url, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var dataAll = JSON.parse(body);
			//console.log(dataAll);
			var dataSet = dataAll[today];
		//console.log(dataAll);
		//console.log(dataSet["Fajr Iqamah"]);
		
		var fajr = dataSet.Fajr+' AM';
		var fajrIqamah = dataSet["Fajr Iqamah"]+" AM";
		var sunrise = dataSet.Sunrise+" AM";
		var zuhr = dataSet.Zuhr+" AM";
		var zuhrIqamah = dataSet["Zuhr Iqamah"]+" PM";
		var asr = dataSet.Asr+" PM";
		var asrIqamah = dataSet["Asr Iqamah"]+" PM";
		var magrib = dataSet.Maghrib+" PM";
		var isha = dataSet.Ishaa+" PM";
		var ishaIqamah = dataSet["Ishaa Iqamah"]+" PM";
		console.log("Fajr "+fajr);
		console.log("Fajr Iqamah "+fajrIqamah);
		console.log("Sunrise "+sunrise);
		console.log("Zuhr "+zuhr);
		console.log("Zuhr Iqamah "+zuhrIqamah);
		console.log("Asr "+asr);
		console.log("Asr Iqamah "+asrIqamah);
		console.log("Magrib "+magrib);
		console.log("Magrib Iqamah " +magrib);
		console.log("Isha "+isha);
		console.log("Isha Iqamah "+ishaIqamah);
		   var table = document.getElementById("myTable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
 
			//console.log("Got a response: ", fbResponse);
		} 
		});
		//console.log(JSON.parse(results.content).November12.Fajr);
		//var todayTime = JSON.parse(results.content).today;
		
		/*var dataSet = dataAll[today];
		console.log(dataSet);
		//console.log(dataSet["Fajr Iqamah"]);
		
		var fajr = dataSet.Fajr+' AM';
		var fajrIqamah = dataSet["Fajr Iqamah"]+" AM";
		var sunrise = dataSet.Sunrise+" AM";
		var zuhr = dataSet.Zuhr+" AM";
		var zuhrIqamah = dataSet["Zuhr Iqamah"]+" PM";
		var asr = dataSet.Asr+" PM";
		var asrIqamah = dataSet["Asr Iqamah"]+" PM";
		var magrib = dataSet.Maghrib+" PM";
		var isha = dataSet.Ishaa+" PM";
		var ishaIqamah = dataSet["Ishaa Iqamah"]+" PM";
		console.log("Fajr "+fajr);
		console.log("Fajr Iqamah "+fajrIqamah);
		console.log("Sunrise "+sunrise);
		console.log("Zuhr "+zuhr);
		console.log("Zuhr Iqamah "+zuhrIqamah);
		console.log("Asr "+asr);
		console.log("Asr Iqamah "+asrIqamah);
		console.log("Magrib "+magrib);
		console.log("Magrib Iqamah " +magrib);
		console.log("Isha "+isha);
		console.log("Isha Iqamah "+ishaIqamah);*/
 
 console.log("\n *EXIT* \n");