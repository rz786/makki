module.exports = function(app)
{
     app.get('/',function(req,res){
       var now = new Date();
       var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
       var month = now.getMonth();
       var date = now.getDate();
       if(date<10) date = "0"+date;
       var month = months[month]
       var today = month+""+date;

       var url = "";
       var dataSet="";

       //console.log(month.toLowerCase());

       var request = require('request');
       var url = 'http://makkimasjid.com/pdf/appdata/'+month.toLowerCase()+'.txt';
       request(url, function (error, response, body) {
       if (!error && response.statusCode == 200) {
         var dataAll = JSON.parse(body);
         //console.log(dataAll);
         dataSet = dataAll[today];

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

           res.render('index',{title:dataSet})
//console.log(dataSet);
       }});
//console.log(dataSet);
      //  res.render('index',{data:dataSet})
     });
     app.get('/clock',function(req,res){
        res.render('clock.html')
     });
}
