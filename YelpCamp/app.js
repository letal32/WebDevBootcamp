var express    = require("express");
var bodyParser = require("body-parser");
var mongoose   = require("mongoose");
var seedDB     = require("./seeds");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");
var app        = express();

mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

seedDB();

app.get("/", function(req,res){
    res.render("landing");
});

// INDEX - Show all the campgrounds
app.get("/campgrounds", function(req,res){

    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    });
});

//NEW - Show form to add new campground
app.get("/campgrounds/new", function(req,res){
    res.render("campgrounds/new");
});

//SHOW - Show more info about campground
app.get("/campgrounds/:id", function(req, res){
    //Find the campground with provided id
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

//CREATE - Add new campground to db
app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name: name, image: image, description: description};

    //Create campground and save to db
    Campground.create(newCampground, function(err, newlyCreated){
        if (err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});

//=========================
// COMMENTS ROUTES
//=========================

app.get("/campgrounds/:id/comments/new", function(req,res){
    Campground.findById(req.params.id, function(err, campground){
        if (err){
            console.log(err);
        } else {
          res.render("comments/new", {campground: campground});  
        }
    });
    
});

app.post("/campgrounds/:id/comments", function(req,res){
    Campground.findById(req.params.id, function(err, campground){
        if (err){
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            Comment.create(req.body.comment, function(err, comment){
                if (err){
                    console.log(err);
                } else {
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect("/campgrounds/"+ campground._id);
                }
            });
        }
    });
});



app.listen("3000", "localhost", function(){
    console.log("Server is running...");
});