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
 *     description: Creates a comment
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
 * /comments/{id}:
 *   delete:
 *      summary: "Delete comments"
 *      description: "delete comments"
 *      operationId: "deleteComment"
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
 *               description: "Comment not found"
 */
router.post("/", commentsConttrollers.post_comment);

/* DELETE method*/
router.delete("/:id", commentsConttrollers.delete_comment);

/*Update method */
router.put("/:id", commentsConttrollers.update_comment);

module.exports = router;