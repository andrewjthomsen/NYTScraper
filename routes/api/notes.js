 // Api route for notes   
var router = require("express").Router();
var noteController = require("../../controllers/note");

router.get("/:id", noteController.findAll);
router.delete("/:id", noteController.delete);
router.post("/", noteController.create);

module.exports = router;