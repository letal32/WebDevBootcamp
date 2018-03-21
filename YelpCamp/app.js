var express    = require("express");
var bodyParser = require("body-parser");
var mongoose   = require("mongoose");
var app        = express();

mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//Schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);


// var campgrounds = [
//         {name: "Salmon Creek", image: "https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5306226.jpg"},
//         {name: "Granite Hill", image: "https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg"},
//         {name: "Mountain Goat's Rest", image: "http://haulihuvila.com/wp-content/uploads/2012/09/hauli-huvila-campgrounds-lg.jpg"}
//     ];

app.get("/", function(req,res){
    res.render("landing");
});

//Show all the campgrounds
app.get("/campgrounds", function(req,res){

    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    });
});

//Show form to add new campground
app.get("/campgrounds/new", function(req,res){
    res.render("new");
});

//Show more info about campground
app.get("/campgrounds/:id", function(req, res){
    //Find the campground with provided id
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("show", {campground: foundCampground});
        }
    });
});

//Add new campground to db
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

app.listen("3000", "localhost", function(){
    console.log("Server is running...");
});