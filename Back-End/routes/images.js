const express = require('express');
const router = express.Router();

const imagesController = require("../controllers/images")
const check_auth = require("../middleware/check_auth");


/* GET method */
router.get("/", imagesController.get_all_images);

/* POST method */
/**
 * @swagger
 *
 * /Image:
 *   post:
 *     tags:
 *         - "Image"
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
router.post("/", check_auth, imagesController.create_image);
/**
 * @swagger
 * /Image/{id}:
 *   delete:
 *      tags:
 *         - "Image"
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
/* DELETE method */
router.delete("/:id", check_auth,imagesController.delete_image);
/**
 * @swagger
 * /Image/{id}:
 *   put:
 *      tags:
 *         - "Image"
 *      summary: "Update Image"
 *      description: "Update Image"
 *      operationId: "updateImage"
 *      consumes:
 *              - "application/json"
 *      produces:
 *              - "application/json"
 *      parameters:
 *              - in: "body"
 *                name: "body"
 *                description: "Put a Image"
 *                required: true
 *                schema:
 *                     $ref: "#/definitions/Image"
 *      responses:
 *            200:
 *               description: "successful deletion"
 *            401:
 *               description: " operation failed"
 *            500:
 *               description: "error server"
 */
/* UPDATE method */
router.put("/:id", check_auth, imagesController.update_image);

module.exports = router;