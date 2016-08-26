var express    =    require('express');
var app        =    express();

require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile)


/*app.get('/',function(req,res){
    //res.send('Hello world');


	var now = new Date();
		var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		var month = now.getMonth();
		var date = now.getDate();
		if(date<10) date = "0"+date;
		var month = months[month]
		var today = month+""+date;

		var url = "";

		var request = require('request');

		var url = 'http://makkimasjid.com/pdf/appdata/'+month+'.txt';
		request(url, function (error, response, body) {
			var dataAll = JSON.parse(body);
			//console.log(dataAll);
			var dataSet = dataAll[today];
		//console.log(dataSet);
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
		res.send('Hello world <br>'+'Salah   Start    Iqamah <br> Fajr '+fajr+
		' '+fajrIqamah +"<br>Sunrise "+sunrise+"<br>Zuhr "+zuhr+" "+zuhrIqamah+"<br>Asr "+asr+"  "+asrIqamah+"<br>Magrib "+magrib+"  " +magrib
		+'<br>Isha '+isha+'  '+ishaIqamah);

			//console.log("Got a response: ", fbResponse);
		});
});*/

app.get('/',function(req,res){

          res.render('index',{title:"Home page"});

});

var server     =    app.listen(3000,function(){
    console.log("We have started our server on port 3000");

});
