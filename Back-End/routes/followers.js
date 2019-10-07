const express = require('express');
const router = express.Router();

const followersController = require("../controllers/followers");

/* GET method */
router.get("/", followersController.get_all_followers);

/* POST method */
router.post("/", followersController.create_follower);

router.delete("/:id", followersController.delete_follower);

module.exports = router;