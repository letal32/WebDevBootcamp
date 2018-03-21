var express = require("express");
var app = express();

//"/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
})

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

// "/dog" => "Meow!!!"
app.get("/dog", function(req, res){
    res.send("Meow!!!");
});

app.get("/r/:subreddit/", function(req, res){
    res.send("Welcome to " + req.params.subreddit + " subreddit!");
});

app.get("*", function(req, res){
    res.send("You're a star!");
});


app.listen("3000", "localhost", function(){
    console.log("Server has started...");
});