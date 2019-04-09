// Api route for fetch
var router = require("express").Router();
var fetchController = require("../../controllers/fetch");

router.get("/", fetchController.headline);

module.exports = router;