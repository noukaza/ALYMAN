const express = require('express');
const router = express.Router();
const chekauth = require("../middleware/check_auth")

const likesController = require("../controllers/likes")

/* GET method */
router.get("/:id", chekauth, likesController.get_like_by_id);

/**
 * @swagger
 *
 * /Like:
 *   post:
 *     tags:
 *         - "Like"
 *     summary: "Create like"
 *     description: "Create like"
 *     operationId: "createLike"
 *     produces:
 *       - application/json
 *     parameters:
 *       - id: Like
 *         description: Like
 *         in:  body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/Like'
 *     responses:
 *       200:
 *         description: Like
 *         schema:
 *           $ref: '#/definitions/Like'
 *
 */
 router.post("/",chekauth,likesController.poste_like);
/**
 * @swagger
 *
 * /Like/{id}:
 *   delete:
 *      tags:
 *         - "Like"
 *      summary: "Delete like"
 *      description: "delete like"
 *      operationId: "deleteLike"
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

router.delete("/:id",chekauth, likesController.delete_like);

module.exports = router;