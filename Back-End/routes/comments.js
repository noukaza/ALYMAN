const express = require('express');
const router = express.Router();
const chekauth = require("../middleware/check_auth");



const commentsConttrollers = require("../controllers/commentes");
/* POST method */
/**
 * @swagger
 *
 * /comments:
 *   post:
 *     security:
 *       - Bearer: [] 
 *     tags:
 *       - "comments"
 *     summary: " Create comments"
 *     description: "Creates comment"
 *     produces:
 *       - application/json
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: comment
 *         type: string
 *         description: first name.
 *     responses:
 *       200:
 *         description: Comments
 *         schema:
 *           $ref: '#/definitions/Comments'
 */
router.post("/", chekauth,commentsConttrollers.post_comment);

/**
 * @swagger
 * /comments/{id}:
 *   delete:
 *      security:
 *       - Bearer: [] 
 *      tags:
 *       - "comments"
 *      summary: "Delete user"
 *      description: "This can only be done by the logged in user."
 *      operationId: "deleteComment"
 *      produces:
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
 *               description: "Comment not found"
 */
/* DELETE method*/
router.delete("/:id", chekauth,commentsConttrollers.delete_comment);

/**
 * @swagger
 * /comments/{id}:
 *   put:
 *      security:
 *         - Bearer: [] 
 *      tags:
 *         - "comments"
 *      summary: "Update comment"
 *      description: "Update comment"
 *      operationId: "updateComment"
 *      consumes:
 *              - "application/json"
 *      produces:
 *              - "application/json"
 *      parameters:
 *              - in: "body"
 *                name: "body"
 *                description: "Put a comment"
 *                required: true
 *                schema:
 *                     $ref: "#/definitions/Comments"
 *      responses:
 *            200:
 *               description: "successful deletion"
 *            401:
 *               description: " operation failed"
 *            500:
 *               description: "error server"
*/
/*Update method */
router.put("/:id", chekauth, commentsConttrollers.update_comment);


/**
 * @swagger
 * /comments/image/{id}:
 *   get:
 *      security:
 *       - Bearer: [] 
 *      tags:
 *       - "comments"
 *      summary: "get comment for image by id"
 *      description: "get comment for image by id ."
 *      operationId: "getCommentId"
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
 *            404:
 *               description: "image not found"
 *            401:
 *               description: "Auth failed"
 */
router.get('/image/:id',chekauth,commentsConttrollers.get_comments_for_image);
module.exports = router;