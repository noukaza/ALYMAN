const express = require('express');
const router = express.Router();

const imagesController = require("../controllers/images")
const chekauth = require("../middleware/check_auth");

/**
 * Upload middleware
 */
const upload = require("../configurations/uploadImages")

/* GET method */
/**
 * @swagger
 * /images:
 *   get:
 *      security:
 *         - Bearer: [] 
 *      tags:
 *       - "Image"
 *      summary: "get images that you are allowed to see"
 *      description: "get images that you are allowed to see."
 *      operationId: "getAllImages"
 *      produces:
 *            - "application/json"
 *      parameters:
 *            - in: query
 *              name: page
 *              schema:
 *                type: integer
 *              description: page
 *            - in: query
 *              name: prePage
 *              schema:
 *                type: integer
 *              description: The numbers of items to return
 *      responses:
 *            200:
 *               description: "successful operation"
 */
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
 *       - in: formData
 *         name: image
 *         type: file
 *         description: The file to upload.
 *     responses:
 *       201:
 *          description: "successful operation"
 *       404:
 *          description: "Not Found"
 *       500:
  *         description: "Error"
 */
router.post("/", upload.single("image"), chekauth, imagesController.create_image);
/**
 * @swagger
 * /images/{id}:
 *   delete:
 *      security:
 *         - Bearer: []
 *      tags:
 *         - "Image"
 *      summary: "Delete Image"
 *      description: "Image"
 *      operationId: "deleteImage"
 *      produces:
 *            - "application/json"
 *      parameters:
 *      - name: "id"
 *        in: "path"
 *        required: true
 *        type: "string"
 *      responses:
 *            200:
 *               description: "successful operation"
 *            500:
 *               description: "Not found"
 *
 */
/* DELETE method */
router.delete("/:id", chekauth,imagesController.delete_image);

/**
 * @swagger
 * /images/{id}:
 *    put:
 *      tags:
 *      - "Image"
 *      summary: "Update an existing image"
 *      description: ""
 *      operationId: "updateImage"
 *      consumes:
 *      - "application/json"
 *      produces:
 *      - "application/json"
 *      parameters:
 *        - name: "id"
 *          in: "path"
 *          required: true
 *          type: "string"
 *        - in: "body"
 *          name: description
 *          type: string
 *          description: new description.
 *          schema:
 *            $ref: "#/definitions/imageUpdate"
 *      responses:
 *        200:
 *          description: "successful operation"
 *        404:
 *          description: "Not found"
 *        500:
 *          description: "Error"
 *      security:
 *         - Bearer: [] 
 */
/* UPDATE method */
router.put("/:id", chekauth, imagesController.update_image);


module.exports = router;