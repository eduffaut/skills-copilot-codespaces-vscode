// Create web server that can accept any request to the path /comments/new and return a form for submitting comments. 
// This form should have method set to POST and an action set to /comments.
// Also add a textarea to this form with name set to comment. 
// Use the textarea value in your handler for the POST to /comments.
// Note: Since we're not actually saving these comments anywhere, if you submit a comment you'll get an error. 
// Don't worry about this for now.

var express = require('express');
var app = express();

app.get('/comments/new', function(req, res){
    res.send('<form method="POST" action="/comments"><textarea name="comment">Enter comment here</textarea><input type="submit" value="Submit"></form>');
});

app.listen(8080);

