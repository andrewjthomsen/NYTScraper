// REsponsibe for saving notes for scraped articles from NYT website
var db = require("../models");
// Initialize express

// Dependencies
module.exports = {
    // search
    findAll: function(req, res){
        db.Note.find({_id:req.params.id}).then(function(dbNote){
            res.json(dbNote);
        })
    },
    // delete
    delete: function(req, res){
        db.Note.remove({_id:req.params.id}).then(function(dbNote){
            // Shows that note is empty after delete function has ran
            res.json(dbNote)
        })
    },
   // Create
    create: function(req, res){
        db.Note.create(req.body).then(function(dbNote){
            res.json(dbNote);
        })
    }
}

