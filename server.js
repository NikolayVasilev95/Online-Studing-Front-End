//Install express server
const cors = require('cors');
const express = require('express');
const path = require('path');

const app = express();

// Enable CORS
app.use(cors());
// Get our API routes
const api = require('./api');
// Set our api routes
app.use('/api', api);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/OnlyneStuding'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/OnlyneStuding/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);