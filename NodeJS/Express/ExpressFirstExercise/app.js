var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/pig", function(req, res){
    res.send("Oink");
});

app.get("/speak/cow", function(req, res){
    res.send("Moo");
});

app.get("/speak/dog", function(req, res){
    res.send("Woof Woof!");
});

app.get("/repeat/:word/:num", function(req, res){
    var concatString = "";
    for (var i=0; i < Number(req.params.num); i++){
        concatString += req.params.word + " ";
    }

    res.send(concatString);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen("3000", "localhost");