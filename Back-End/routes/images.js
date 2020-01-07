const express = require('express');
const router = express.Router();

const imagesController = require("../controllers/images")
const chekauth = require("../middleware/check_auth");

/**
 * Upload middleware
 */
const upload = require("../configurations/uploadImages")

/* GET method */
router.get("/",chekauth, imagesController.get_all_images);

/* POST method */


 /**
 * @swagger
 * /images:
 *   post:
 *     security:
 *         - Bearer: []
 *     tags:
 *       - "Image"
 *     summary: "uplaod image"
 *     description: post image
 *     consumes:
 *       - multipart/form-data
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: formData
 *         name: description
 *         type: string
 *         description: first name.
 *       - in: formData
 *         name: image
 *         type: file
 *         description: The file to upload.
 *     responses:
 *       200:
 *         description: image
 */
router.post("/", upload.single("image"), chekauth, imagesController.create_image);
/**
 * @swagger
 * /Image/{id}:
 *   delete:
 *      security:
 *         - Bearer: []
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
router.delete("/:id", chekauth,imagesController.delete_image);
/**
 * @swagger
 * /Image/{id}:
 *   put:
 *      security:
 *         - Bearer: []
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
router.put("/:id", chekauth, imagesController.update_image);





module.exports = router;