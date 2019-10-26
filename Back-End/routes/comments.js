const express = require('express');
const router = express.Router();

const commentsConttrollers = require("../controllers/commentes");

/* GET method */
router.get("/", commentsConttrollers.get_all_comments);

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
 *     parameters:
 *       - id: comment
 *         description: comment
 *         in:  body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/Comments'
 *     responses:
 *       200:
 *         description: Comments
 *         schema:
 *           $ref: '#/definitions/Comments'
 */
router.post("/", commentsConttrollers.post_comment);

/**
 * @swagger
 * /comments/{id}:
 *   delete:
 *      tags:
 *         - "comments"
 *      summary: "Delete comments"
 *      description: "delete comments"
 *      operationId: "deleteComment"
 *      produces:
 *            - "application/json"
 *      parameters:
 *      - name: "id"
 *        in: "path"
 *        required: true
 *        type: "string"
 *      responses:
 *            200:
 *               description: "successful deletion"
 *            401:
 *               description: " deletion failed"
 *            500:
 *               description: "error server"
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
 *               description: " deletion failed"
 *            500:
 *               description: "error server"
*/
/*Update method */
router.put("/:id", commentsConttrollers.update_comment);

module.exports = router;