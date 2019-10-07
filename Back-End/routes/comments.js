const express = require('express');
const router = express.Router();

const commentsConttrollers = require("../controllers/commentes");

/* GET method */
router.get("/", commentsConttrollers.get_all_comments);

/* POST method */
router.post("/", commentsConttrollers.post_comment);

/* DELETE method*/
router.delete("/:id", commentsConttrollers.delete_comment);

/*Update method */
router.put("/:id", commentsConttrollers.update_comment);

module.exports = router;