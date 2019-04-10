// API and VIEW routes are loaded in this file.
// Therefore, this file is responsible for routing.
// Require express
var express = require('express');
// Pull in database
var db = require('../models');
// Require Axios
var axios = require('axios');
// Require Cheerio
var cheerio = require('cheerio');
// Bring in express router
var router = express.Router()
//==========================================================
// Routes
// Get route for scraping NYT website
router.get("/scrape", function(req, res) {
    console.log("Scrape is complete....")
     axios.get('https://www.nytimes.com/').then(function (res) {
        //load cheerio
        var $ = cheerio.load(res.data);
        console.log("scrape working!");
        // empty variable to hold results from scrape
        var headlines = [];
        //class="css-1vynn0q esl82me3"
        // Tells cheerio to only bring bag divs with the class of css-1vynn0q
        $("h2.css-n2blzn.esl82me0").each(function (i, element) {// not correctly targeting articles
            console.log(i,element)
            // var headlineDiv = $(this).find('h2').text().trim();
            // var summary = $(this).find('p').text().trim();
            // var url = $(this).find('a').attr('href').trim();
            // object that gets pushed the Mongo db
            // var mongoObj = {
            //     headline: headlineDiv,
            //     summery: summary,
            //     url: url
            // };
            // db.headlines.push(mongoObj);
        });
        console.log(headlines)
        //return headlines;
          //res.redirect("/")
    })
    .catch(function(err){
        console.log(err)
    });
});
//======================
// Homepage to show all articles
router.get("/", function(req, res) {
    db.Headline.find({}).then(function(dbHeadline){
        // variable to hold onto headlines found in database
        // Articles that already exist in db from search
        var foundHeadlines = dbHeadline;
        var hbsObj = {headlines:dbHeadline};
        res.render("home", hbsObj)
    })
})

module.exports = router;