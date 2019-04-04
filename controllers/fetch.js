// Model is responsible for taking scraped infor from NYT.com and pushing it to the database
var db = require('../models');
var scrape = require('../scripts/scrape.js');

module.exports = {
    headline: function (req, res) {
        return scrape().then(function (articles) {
            return db.Headline.create(articles);
        }).then(function (dbHeadline) {
            if (dbHeadline.length === 0) {
                res.json({
                    message: "Search returned with 0 results"
                })
            } else {
                res.json({
                    message: "Search was successful!"
                })
            }
        }).catch(function (err) {
            res.json({
                message: "Articles were added!"
            })
        })
    }
};