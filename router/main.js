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


		 var fs = require('fs');
		var readline = require('readline');
		var google = require('googleapis');
		var googleAuth = require('google-auth-library');

// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/calendar-nodejs-quickstart.json
var SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'calendar-nodejs-quickstart.json';

// Load client secrets from a local file.
fs.readFile('client_secret.json', function processClientSecrets(err, content) {
  if (err) {
    console.log('Error loading client secret file: ' + err);
    return;
  }
  // Authorize a client with the loaded credentials, then call the
  // Google Calendar API.
  authorize(JSON.parse(content), listEvents);
  
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  var clientSecret = credentials.installed.client_secret;
  var clientId = credentials.installed.client_id;
  var redirectUrl = credentials.installed.redirect_uris[0];
  var auth = new googleAuth();
  var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, function(err, token) {
    if (err) {
      getNewToken(oauth2Client, callback);
    } else {
      oauth2Client.credentials = JSON.parse(token);
      callback(oauth2Client);
	  
    }
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url: ', authUrl);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', function(code) {
    rl.close();
    oauth2Client.getToken(code, function(err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    });
  });
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  console.log('Token stored to ' + TOKEN_PATH);
}

/**
 * Lists the next 10 events on the user's primary calendar.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */

 var hijriDate="";
function listEvents(auth) {
  var calendar = google.calendar('v3');
  calendar.events.list({
    auth: auth,
    calendarId: 'chicagohilal.org_dd3vb8e40l4kij6iptp04qo3r4@group.calendar.google.com',
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime'
  }, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var events = response.items;
    if (events.length == 0) {
      console.log('No upcoming events found.');
    } else {
      //console.log('Upcoming event:');
      //for (var i = 0; i < events.length; i++) {
      var  event = events[0];
        var start = event.start.dateTime || event.start.date;
        //console.log('%s - %s', start, event.summary);
hijriDate=event.summary;
console.log("Hijri "+hijriDate);
console.log("Hijri 1"+hijriDate);
           res.render('index',{title:dataSet,hijri:hijriDate})
    }
  });
}


//console.log("Hijri 1"+hijriDate);
  //         res.render('index',{title:dataSet,hijri:hijriDate})
//console.log(dataSet);
       }});
//console.log(dataSet);
      //  res.render('index',{data:dataSet})
     });
     app.get('/clock',function(req,res){
        res.render('clock.html')
     });
}
