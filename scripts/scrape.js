var axios = require('axios');
var cheerio = require('cheerio');
// function responseible for scraping NYT site
var scrape = function () {
    return axios.get('http://www.nytimes.com/').then(function (res) {
        //load cheerio
        var $ = cheerio.load(res);
        console.log("scrape working!");
        // empty variable to hold results from scrape
        var articles = [];
        //class="css-1vynn0q esl82me3"
        // Tells cheerio to only bring bag divs with the class of css-1vynn0q
        $("div.css-1vynn0q").each(function (i, element) {
            var headlineDiv = $(this).find('h2').text().trim();
            var summary = $(this).find('p').text().trim();
            var url = $(this).find('a').attr('href').trim();
            // object that gets pushed the Mongo db
            var mongoObj = {
                headline: headlineDiv,
                summery: summary,
                url: url
            };
            articles.push(mongoObj);
        });
        return articles;
    });
}
module.exports = scrape;