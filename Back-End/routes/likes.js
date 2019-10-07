const express = require('express');
const router = express.Router();
const chekauth = require("../middleware/check_auth")

const likesController = require("../controllers/likes")

/* GET method */
router.get("/:id", chekauth, likesController.get_like_by_id);

/* POST method */
router.post("/", likesController.poste_like);

router.delete("/:id", likesController.delete_like);

module.exports = router;