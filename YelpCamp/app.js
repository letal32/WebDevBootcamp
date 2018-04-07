var express    = require("express");
var bodyParser = require("body-parser");
var mongoose   = require("mongoose");
var seedDB     = require("./seeds");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");
var User       = require("./models/user");
var passport   = require("passport");
var localStrategy = require("passport-local");
var app        = express();

var commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes = require("./routes/index");

mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "dikhfohdfoshof",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

seedDB();


app.listen("3000", "localhost", function(){
    console.log("Server is running...");
});