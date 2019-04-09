var router = require('express').Router();
var db = require('../../models');
// Going to homepage route, goes to api route to grab unsaved headlines and save them. Renders them onto homepage
router.get("/", function(req, res) {
    // db.Headline.find({saved:false}).sort({date:-1}).then(function(dbHeadline){
        // res.render("home", {headline:dbHeadline})
        res.send("I am working")
    })
// })