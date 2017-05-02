var express = require("express");
var router = express.Router();
var burger = require("./models/burger.js");

// Routes for front end
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function (req, res) {
  if (req.body.name) {
    burger.create([
      "burger_name"
    ], [
        req.body.name
      ], function () {
        res.redirect("/");
      });
  }
});

router.put("/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function () {
    res.redirect("/");

  });
});

module.exports = router;
