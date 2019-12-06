//Install express server
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

var corsOptions = {
  origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}

app.use(cors(corsOptions));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/OnlyneStuding'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/OnlyneStuding/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);