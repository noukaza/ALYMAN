const express = require('express');
const router = express.Router();

const imagesController = require("../controllers/images")

/* GET method */
router.get("/", imagesController.get_all_images);

/* POST method */
/**
 * @swagger
 *
 * /Image:
 *   post:
 *     description: New Imge
 *     produces:
 *       - application/json
 *     parameters:
 *       - id: Image
 *         description: Image
 *         in:  body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/Image'
 *     responses:
 *       200:
 *         description: Image
 *         schema:
 *           $ref: '#/definitions/Image'
 */
router.post("/", imagesController.create_image);

/* DELETE method */
router.delete("/:id", imagesController.delete_image);

/* UPDATE method */
router.put("/:id", imagesController.update_image);

module.exports = router;