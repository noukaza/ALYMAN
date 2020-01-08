const express = require('express');
const router = express.Router();
const chekauth = require("../middleware/check_auth")

const likesController = require("../controllers/likes")

/* GET method */
router.get("/:id", chekauth, likesController.get_like_by_id);

/**
*  @swagger
*  
*   /likes:
*     post:
*       tags:
*       - "Like"
*       summary: "Add a new Likes to the image"
*       description: ""
*       operationId: "addLikes"
*       consumes:
*       - "application/json"
*       - "application/xml"
*       produces:
*       - "application/xml"
*       - "application/json"
*       parameters:
*       - in: "body"
*         name: "body"
*         description: "Likes object that needs to be added to the image"
*         required: true
*         schema:
*           $ref: "#/definitions/Like"
*       responses:
*         200:
*           description: "Successful operation"
*         404:
*           description: "Not found"
*         500:
*           description: "Error"
*       security:
*          - Bearer: []
*/
router.post("/",chekauth,likesController.poste_like);
/**
 * @swagger
 *
 * /likes/{id}:
 *   delete:
 *      security:
 *         - Bearer: []
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
 *            404:
 *               description: "Not found"
 *            500:
 *               description: "Error"
 */

router.delete("/:id",chekauth, likesController.delete_like);

module.exports = router;