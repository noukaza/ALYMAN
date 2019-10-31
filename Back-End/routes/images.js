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
 *
 * /Image/{id}:
 *   delete:
 *      summary: "Delete Image"
 *      description: "Image"
 *      operationId: "deleteImage"
 *      produces:
 *            - "application/xml"
 *            - "application/json"
 *      parameters:
 *      - name: "id"
 *        in: "path"
 *        required: true
 *        type: "string"
 *      responses:
 *            400:
 *               description: "Invalid id supplied"
 *            404:
 *               description: "Image not found"
 *
 */
router.post("/", imagesController.create_image);

/* DELETE method */
router.delete("/:id", imagesController.delete_image);

/* UPDATE method */
router.put("/:id", imagesController.update_image);

module.exports = router;