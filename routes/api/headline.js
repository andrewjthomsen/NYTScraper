// Api route for headline
var router = require("express").Router();
var headlineController = require("../../controllers/headline");

router.get("/", headlineController.findAll);
router.delete("/:id", headlineController.delete);
router.put("/:id", headlineController.update);
router.get("/:id", headlineController.findOne);

module.exports = router;