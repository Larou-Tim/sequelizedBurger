var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = 4040;

var app = express();

// Serve static content for the app from the "public"
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes
var routes = require("./burgers_controller.js");

app.use("/", routes);


var db = require("./models");

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});