/**
 * @swagger
 * openapi: 3.0.0
 * securityDefinitions:
 *      Bearer:
 *          name: Authorization
 *          description : "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\""
 *          type: apiKey
 *          scheme: bearer
 *          in: header
 *          bearerFormat: JWT 
 * tags:
 *    - name: "user"
 *      description: "Everything about your user"
 * definitions:
 *   user:
 *     type: object
 *     required:
 *       - id
 *       - firstName
 *       - lastName
 *       - profileImage
 *       - bio
 *       - createAt
 *       - updateAt
 *       - password
 *     properties:
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       profileImage:
 *          type: string
 *       password:
 *         type: string
 *         format: password
 *       bio:
 *         type: string
 *       createAt:
 *         type: string
 *       updateAt:
 *         type: string
 *   imageUpdate:
 *      type: object
 *      required:
 *       - description
 *      properties:
 *       description:
 *         type: string      
 *   userLogin:
 *     type: object
 *     required:
 *       - email
 *       - password
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 *         format: password
 *   Image:
 *     type: object
 *     required:
 *       - id
 *       - user
 *       - image
 *       - likes
 *       - comments
 *       - description
 *       - createAt
 *       - updateAt
 *     properties:
 *       id:
 *         type: integer
 *       user:
 *         type: integer
 *       image:
 *         type: string
 *       comments:
 *         type: integer
 *       likes:
 *         type: integer
 *       description:
 *         type: string
 *       createAt:
 *         type: string
 *       updateAt:
 *         type: string
 *
 *   Follower:
 *     type: object
 *     required:
 *       - id
 *       - follower
 *       - following
 *       - createAt
 *     properties:
 *       id:
 *         type: integer
 *       follower:
 *         type: integer
 *       following:
 *         type: integer
 *       createAt:
 *         type: string
 *   Like:
 *     type: object
 *     required:
 *       - id
 *       - user
 *       - image
 *       - createAt
 *       - updateAt
 *     properties:
 *       id:
 *         type: integer
 *       user:
 *         type: integer
 *       image:
 *         type: integer
 *       createAt:
 *         type: string
 *       updateAt:
 *         type: string
 *   Comments:
 *     type: object
 *     required:
 *       - id
 *       - image
 *       - user
 *       - comment
 *       - createAt
 *       - updateAt
 *     properties:
 *       id:
 *         type: integer
 *       image:
 *         type: integer
 *       user:
 *         type: integer
 *       comment:
 *         type: string
 *       createAt:
 *         type: string
 *       updateAt:
 *         type: string
 */