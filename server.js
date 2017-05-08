const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const searches = null;
const MONGODB_URI = process.env.MONGOLAB_URI || "mongodb://localhost:27017/test";

app.get('/', function(req, res) {
    res.send("Hello World");
})

// get img url
app.get('/api/imagesearch/:search', function(req, res) {
    // get search from request object
    const search = req.body.search;
    
    // save search in db
    // response object contains search term and time term was queried?
    res.json({
        
    })
    
})

app.listen(8080, function() {
    console.log('App running on 8080');
})