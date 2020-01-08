const express = require('express');
const router = express.Router();

const followersController = require("../controllers/followers");
const check_auth = require("../middleware/check_auth");
const followerMiddleware = require("../middleware/followers");


/* GET method */
router.get("/", followersController.get_all_followers);

/* POST method */
/**
 * @swagger
 *
 * /followers:
 *   post:
 *     security:
 *         - Bearer: []
 *     tags: 
 *         - "follower"
 *     summary: "Create follower"
 *     description: Creates a follower
 *     consumes: 
 *        -multipart/form-data
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: formData
 *         name: following
 *         type: mongoose.Schema.Types.ObjectId
 *         description: id following.
 * 
 * 
 *     responses:
 *       200:
 *         description: "Successful operation"
 *         schema:
 *           $ref: '#/definitions/Follower'
 *       404:
 *         description: "Not found"
 *       500:
 *         description: "Error"
 *
 */
 router.post("/", check_auth, followerMiddleware.followAlreadyExists, followersController.create_follower);
 /** 
 * @swagger
 * /followers/{userId}:
 *   delete:
 *      security:
 *          - Bearer: []
 *      tags:
 *        - "follower"
 *      summary: "Delete follower"
 *      description: "This can only be done by the follower or the following concerned"
 *      operationId: "deletefollower"
 *      produces:
 *            - "application/json"
 *      parameters:
 *      - name: "userId"
 *        in: "path"
 *        required: true
 *        type: "string"
 *      responses:
 *            200:
 *               description: "successful operation"
 *            404:
 *               description: "Not Found"
 *            500:
 *               description: "Error"
 */

router.delete("/:id", check_auth, followersController.delete_follower);

module.exports = router;