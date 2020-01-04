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
router.delete("/:id", commentsConttrollers.delete_comment);

/**
 * @swagger
 * /comments/{id}:
 *   put:
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
router.put("/:id", commentsConttrollers.update_comment);



router.get('/image/:id',commentsConttrollers.get_comments_for_image);
module.exports = router;