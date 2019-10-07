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
 * /user:
 *   post:
 *     summary: Adds a new user
 *     requestBody:
 *       content:
 *         application/json:     # Media type
 *           examples:    # Child of media type
 *             Jessica:   # Example 1
 *               value:
 *                 id: 10
 *                 name: Jessica Smith
 *             Ron:       # Example 2
 *               value:
 *                 id: 11
 *                 name: Ron Stewart
 *     responses:
 *       '200':
 *         description: OK
 */
router.post("/", upload.single("profileImage"), userController.create_user);

router.delete('/:id', userController.delets_user)

router.post("/login", userController.login_user)

router.get('/', userController.get_all_user)

module.exports = router;