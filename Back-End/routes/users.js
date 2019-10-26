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
 *     tags:
 *       - "user"
 *     summary: "Create user"
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

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *      tags:
 *       - "user"
 *      summary: "Delete user"
 *      description: "This can only be done by the logged in user."
 *      operationId: "deleteUser"
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
 *               description: "User not found"
 */
router.delete('/:id', userController.delets_user)


/**
 * @swagger
 * /user/{login}:
 *   get:
 *      tags:
 *       - "user"
 *      summary: "get user"
 *      operationId: "getUser"
 *      produces:
 *            - "application/xml"
 *            - "application/json"
 *      parameters:
 *      - name: "username"
 *        in: "query"
 *        required: true
 *        type: "string"
 *      - name: "password"
 *        in: "query"
 *        required: true
 *        type: string
 *      responses:
 *            200:
 *               description: "successful operation"
 *               schema:
 *                 type: "string"
 *            404:
 *               description: "User not found"
 */
router.post("/login", userController.login_user)

router.get('/', userController.get_all_user)

module.exports = router;