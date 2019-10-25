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
 *     description:  Like
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
 * /Like/{id}:
 *   delete:
 *      summary: "Delete like"
 *      description: "delete like"
 *      operationId: "deleteLike"
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
 *            200:
 *               description:"successful"
 */
router.post("/", likesController.poste_like);

router.delete("/:id", likesController.delete_like);

module.exports = router;