/**
 * @swagger
 * tags:
 *    - name: "user"
 *      description: "Everything about your user"
 *     
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - id
 *       - firstName
 *       - lastName
 *       - urlProfilPic
 *       - bio
 *       - createAt
 *       - updateAt
 *       - password
 *     properties:
 *       id:
 *         type: integer
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       urlProfilPic:
 *          type: string
 *       bio:
 *        type: string
 *       createAt:
 *         type: string
 *       updateAt:
 *         type: string
 *       password:
 *         type: string
 *         format: password
 *   Image:
 *     type: object
 *     required:
 *       - id_image
 *       - userId
 *       - url
 *       - description
 *       - createAt
 *       - updateAt
 *     properties:
 *       id_image:
 *          type: integer
 *       userId:
 *         type: integer
 *       url:
 *         type: string
 *       description:
 *          type: string
 *       createAt:
 *         type: string
 *       updateAt:
 *         type: string
 *
 *   Follower:
 *     type: object
 *     required:
 *       - id_follow
 *       - IdUserFrom
 *       - IdUserTo
 *       - createAt
 *     properties:
 *       id_follow:
 *         type: integer
 *       IdUserFrom:
 *         type: integer
 *       IdUserTo:
 *         type: integer
 *       createAt:
 *         type: string
 *   Like:
 *     type: object
 *     required:
 *       - id_like
 *       - IdImage
 *       - IdUser
 *       - createAt
 *     properties:
 *       id_like:
 *          type: integer
 *       IdImage:
 *         type: integer
 *       IdUser:
 *         type: integer
 *       createAt:
 *         type: string
 *   Comments:
 *     type: object
 *     required:
 *       - id_comment
 *       - IdImage
 *       - IdUser
 *       - comment
 *       - createAt
 *     properties:
 *       id_comment:
 *         type: integer
 *       IdImage:
 *         type: integer
 *       IdUser:
 *         type: integer
 *       comment:
 *          type: string
 *       createAt:
 *         type: string
 */