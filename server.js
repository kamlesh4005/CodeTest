const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var mongoose = require('mongoose');

const db = "mongodb://dbuser:dbpass@ds155587.mlab.com:55587/techolutiondb";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("Error! " + err);
    }
});

const api = require('./server/routes/api');
const port = 3000;

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});