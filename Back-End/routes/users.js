const express = require('express');
const router = express.Router();

/**
 * Upload middleware
 */
const upload = require("../configurations/user")

/**
 * user controller 
 */
const userController = require("../controllers/users");



/**
 * @swagger
 *
 * /users:
 *   post:
 *     description: Creates a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in:  body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: users
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.post("/", upload.single("profileImage"), userController.create_user);

router.delete('/:id', userController.delets_user)

router.post("/login", userController.login_user)

router.get('/', userController.get_all_user)

module.exports = router;