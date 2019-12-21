const express = require('express');
const router = express.Router();
const chekauth = require("../middleware/check_auth")

const queryController = require("../controllers/queries")


/* GET method */
router.get("/users/:q", chekauth, queryController.searchUser);




module.exports = router;