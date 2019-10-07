const express = require('express');
const router = express.Router();

const imagesController = require("../controllers/images")

/* GET method */
router.get("/", imagesController.get_all_images);

/* POST method */
router.post("/", imagesController.create_image);

/* DELETE method */
router.delete("/:id", imagesController.delete_image);

/* UPDATE method */
router.put("/:id", imagesController.update_image);

module.exports = router;