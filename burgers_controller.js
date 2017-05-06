var express = require("express");
var router = express.Router();
// var burger = require("./models/burger.js");
var db = require("./models");

// Routes for front end
router.get("/", function (req, res) {
  var query = {};
  // if (req.query.author_id) {
  //   query.AuthorId = req.query.author_id;
  // }
  db.Burger.findAll({
    // include:[db.Author], 
    where: query
  }).then(function (dbBurger) {
    var hbsObject = {
      burgers: dbBurger
    };
  
    res.render("index", hbsObject);
  });
});

router.post("/", function (req, res) {
  console.log(req.body);
  db.Burger.create(req.body).then(function (dbBurger) {
    res.redirect("/");
  });
});

router.put("/:id", function (req, res) {


  db.Burger.update(
    req.body,
    {
      where: {
        id: req.params.id
      }
    }).then(function (dbPost) {
      res.redirect("/");
    });
});


module.exports = router;
