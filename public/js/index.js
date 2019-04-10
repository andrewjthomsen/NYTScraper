// function for scrape button
$("#scrapeBTN").click(function(event) {
    event.preventDefault()
    $.ajax("/scrape", {
        type: "GET",
    }).then(function() {
        console.log("The button has successfully scraped")
        res.json(headlines);
    })
})