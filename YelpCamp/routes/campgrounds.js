var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");

// INDEX - Show all the campgrounds
router.get("/", function(req,res){

    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds, currentUser: req.user});
        }
    });
});

//NEW - Show form to add new campground
router.get("/new", function(req,res){
    res.render("campgrounds/new");
});

//SHOW - Show more info about campground
router.get("/:id", function(req, res){
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
router.post("/", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name: name, image: image, description: description};

    Campground.create(newCampground, function(err, newlyCreated){
        if (err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});

module.exports = router;