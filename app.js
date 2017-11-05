var express = require('express');
var app = express();
var request = require('request'); // reference for simple GET request

app.get('/', function(req, res) {
request('https://www.reddit.com/r/Jokes/top.json?limit=1', function(error, response, body){
    var resp = JSON.parse(body);
    var jokeTitle = resp.data.children[0].data.title;
    var jokeText = resp.data.children[0].data.selftext;
	res.send({
    jokeTitle: jokeText
  });})
  
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
