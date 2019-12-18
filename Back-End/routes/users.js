const express = require('express');
const router = express.Router();
const chekauth = require("../middleware/check_auth");
const chekUser = require("../middleware/check_user");
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
 * /users:
 *   post:
 *     tags:
 *       - "user"
 *     summary: "Create user"
 *     description: Creates a user
 *     consumes:
 *       - multipart/form-data
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: formData
 *         name: firstName
 *         type: string
 *         description: first name.
 *       - in: formData
 *         name: lastName
 *         type: string
 *         description: last name.
 *       - in: formData
 *         name: profileImage
 *         type: file
 *         description: The file to upload.
 *       - in: formData
 *         name: bio
 *         type: string
 *         description: The bio.
 *       - in: formData
 *         name: email
 *         type: string
 *         description: email.
 *       - in: formData
 *         name: password
 *         type: string
 *         description: password.
 * 
 * 
 *     responses:
 *       200:
 *         description: users
 *         schema:
 *           $ref: '#/definitions/user'
 */
router.post(
            "/",
            upload.single("profileImage"),
            chekUser.notUsedEmail,
            userController.create_user
        );

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *      security:
 *         - Bearer: []
 *      tags:
 *       - "user"
 *      summary: "Delete user"
 *      description: "This can only be done by the logged in user."
 *      operationId: "deleteUser"
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
 *               description: "User not found"
 */
router.delete('/:id',chekauth, userController.delets_user)

/**
 * @swagger
 * /users/login:
 *   post:
 *      tags:
 *       - "user"
 *      summary: "get user"
 *      operationId: "getUser"
 *      produces:
 *            - "application/json"
 *      consumes:
 *            - "application/json"
 *      parameters:
 *      - in: "body"
 *        name: "body"
 *        required: true
 *        schema:
 *          $ref: "#/definitions/userLogin"
 *      responses:
 *            200:
 *               description: "Auth successful"
 *               schema:
 *                 type: "string"
 *            401:
 *               description: "Auth failed" 
 *            500:
 *               description: "error"
 */
router.post("/login", userController.login_user)

router.get('/', userController.get_all_user)


/**
 * @swagger
 * /users/{id}:
 *   get:
 *      tags:
 *       - "user"
 *      summary: "get user"
 *      description: "get user info ."
 *      operationId: "getUser"
 *      produces:
 *            - "application/json"
 *      parameters:
 *      - name: "id"
 *        in: "path"
 *        required: true
 *        type: "string"
 *      responses:
 *            200:
 *               description: "successful operation"
 *               schema:
 *                 type: "object"
 *                 items:
 *                 $ref: "#/definitions/user"
*            304:
 *               description: "successful operation "
 *               schema:
 *                 type: "object"
 *                 items:
 *                 $ref: "#/definitions/user"
 *            404:
 *               description: "User not found"
 */
router.get('/:id', userController.get_user_by_id)


// TODO : ADD swager doc 
router.get('/:id/followers/',userController.get_follower_for_user);

module.exports = router;