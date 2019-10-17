const express = require('express');
const router = express.Router();

const followersController = require("../controllers/followers");

/* GET method */
router.get("/", followersController.get_all_followers);

/* POST method */
/**
 * @swagger
 *
 * /follower:
 *   post:
 *     description: New follow
 *     produces:
 *       - application/json
 *     parameters:
 *       - id: follow
 *         description: follow
 *         in:  body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/Follower'
 *     responses:
 *       200:
 *         description: Follow
 *         schema:
 *           $ref: '#/definitions/Follower'
 */
router.post("/", followersController.create_follower);

router.delete("/:id", followersController.delete_follower);

module.exports = router;