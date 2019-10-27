const express = require('express');
const router = express.Router();

const followersController = require("../controllers/followers");
const check_auth = require("../middleware/check_auth");


/* GET method */
router.get("/", followersController.get_all_followers);

/* POST method */
/**
 * @swagger
 *
 * /follower:
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
 *         name: follower
 *         type: mongoose.Schema.Types.ObjectId
 *         description: id follower.
 *       - in: formData
 *         name: following
 *         type: mongoose.Schema.Types.ObjectId
 *         description: id following.
 * 
 * 
 *     responses:
 *       200:
 *         description: Follow
 *         schema:
 *           $ref: '#/definitions/Follower'
 */
 router.post("/", check_auth,  followersController.create_follower);
 /** 
 * @swagger
 * /follower/{id}:
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
 *      - name: "id"
 *        in: "path"
 *        required: true
 *        type: "string"
 *      responses:
 *            400:
 *               description: "Invalid id supplied"
 *            404:
 *               description: "follower not found"
 */

router.delete("/:id", check_auth, followersController.delete_follower);

module.exports = router;