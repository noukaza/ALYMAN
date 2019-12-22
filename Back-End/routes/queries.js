const express = require('express');
const router = express.Router();
const chekauth = require("../middleware/check_auth")

const queryController = require("../controllers/queries")

/**
 * @swagger
 * /q/users/{firstName}:
 *   get:
 *      security:
 *         - Bearer: []
 *      tags:
 *       - "Search"
 *      summary: "search for user"
 *      description: "This can only be done by the logged in user."
 *      produces:
 *            - "application/json"
 *      parameters:
 *      - name: "firstName"
 *        in: "path"
 *        required: true
 *        type: "string"
 *      responses:
 *            200:
 *               description: "successful operation"
 */

//TODO :  add more responses to swagger doc
router.get("/users/:q", chekauth, queryController.searchUser);




module.exports = router;