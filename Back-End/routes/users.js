const express = require('express');
const router = express.Router();
const chekauth = require("../middleware/check_auth");
const chekUser = require("../middleware/check_user");
const userFeild = require("../middleware/userFields");


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
 *       201:
 *         description: users
 *         schema:
 *           $ref: '#/definitions/user'
 */
router.post(
    "/",
    upload.single("profileImage"),
    chekUser.notUsedEmail,
    userFeild.ValidPassword,
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
 *            200:
 *                description: "successful operation"
 *            404:
 *               description: "User not found"
 *            403:
 *                description: "you are not the user"
 */
router.delete('/:id', chekauth, userController.delets_user)

/**
 * @swagger
 *
 * /users/login:
 *   post:
 *     tags: 
 *         - "user"
 *     consumes: 
 *        -multipart/form-data
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: formData
 *         name: email
 *         type: string
 *         description: id following.
 *       - in: formData
 *         name: password
 *         type: string
 *         description: id following.
 *     responses:
 *            200:
 *               description: "Authentication successful"
 *            401:
 *               description: "Authentication failed"
 *            500:
 *               description: "Error"
 */
router.post("/login", userController.login_user)
/**
 * @swagger
 * /users:
 *   get:
 *      security:
 *         - Bearer: [] 
 *      tags:
 *       - "user"
 *      summary: "get all users"
 *      description: "get all users info ."
 *      operationId: "getAllUsers"
 *      produces:
 *            - "application/json"
 *      responses:
 *            200:
 *               description: "successful operation"
 *               schema:
 *                 type: "object"
 *                 items:
 *                 $ref: "#/definitions/user"
 *            404:
 *                description: "Not found"
 *            500:
 *               description: "Erreur"
 */
router.get('/', chekauth, userController.get_all_user)
/**
 * @swagger
 * /users/{id}:
 *   get:
 *      security:
 *         - Bearer: [] 
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
 *            404:
 *               description: "User not found"
 */
router.get('/:id', chekauth, userController.get_user_by_id)


/**
 * @swagger
 * /users/{id}/followers/:
 *   get:
 *      security:
 *         - Bearer: [] 
 *      tags:
 *       - "user"
 *      summary: "get all followers for a user"
 *      description: "get all followers for a user ."
 *      operationId: "followersForUsers"
 *      produces:
 *            - "application/json"
 *      parameters:
 *       - name: "id"
 *         in: "path"
 *         required: true
 *         type: "string"
 *      responses:
 *            200:
 *               description: "successful operation"
 *               schema:
 *                 type: "object"
 *                 items:
 *                 $ref: "#/definitions/user"
 *            404:
 *               description: "successful operation"
 */
router.get('/:id/followers/', chekauth, userController.get_follower_for_user);

/**
 * @swagger
 * /users/{id}/followings/:
 *   get:
 *      security:
 *         - Bearer: [] 
 *      tags:
 *       - "user"
 *      summary: "get all followings for a user"
 *      description: "get all followings for a user ."
 *      operationId: "followingsForUsers"
 *      produces:
 *            - "application/json"
 *      parameters:
 *       - name: "id"
 *         in: "path"
 *         required: true
 *         type: "string"
 *      responses:
 *            200:
 *               description: "successful operation"
 *               schema:
 *                 type: "object"
 *                 items:
 *                 $ref: "#/definitions/user"
 *            404:
 *               description: "Not found"
 */
router.get('/:id/followings/', chekauth, userController.get_followings_for_user);

/**
 * @swagger
 * /users/{id}/images/:
 *   get:
 *      security:
 *         - Bearer: [] 
 *      tags:
 *       - "user"
 *      summary: "get all images for a user"
 *      description: "get all images for a user ."
 *      operationId: "imagesForUsers"
 *      produces:
 *            - "application/json"
 *      parameters:
 *       - name: "id"
 *         in: "path"
 *         required: true
 *         type: "string"
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: page
 *       - in: query
 *         name: prePage
 *         schema:
 *           type: integer
 *         description: The numbers of items to return
 *      responses:
 *            200:
 *               description: "successful operation"
 *               schema:
 *                 type: "object"
 *                 items:
 *                 $ref: "#/definitions/user"
 */
router.get('/:id/images', chekauth, userController.get_images_for_user);

/**
 * @swagger
 * /users:
 *    put:
 *      tags:
 *      - "user"
 *      summary: "Update an existing user"
 *      description: ""
 *      operationId: "updateUser"
 *      consumes:
 *      - "application/json"
 *      produces:
 *      - "application/json"
 *      parameters:
 *        - in: formData
 *          name: firstName
 *          type: string
 *          description: first name.
 *        - in: formData
 *          name: lastName
 *          type: string
 *          description: last name.
 *        - in: formData
 *          name: profileImage
 *          type: file
 *          description: The file to upload.
 *        - in: formData
 *          name: email
 *          type: string
 *          description: email.
 *        - in: formData
 *          name: password
 *          type: string
 *          description: password.
 *      responses:
 *        200:
 *          description: "successful operation"
 *        400:
 *          description: "Invalid ID supplied"
 *        404:
 *          description: "user not found"
 *      security:
 *         - Bearer: [] 
 */

router.put('/', upload.single("profileImage"),
    chekauth,     userFeild.ValidPassword,
    userController.edit_user);

module.exports = router;
