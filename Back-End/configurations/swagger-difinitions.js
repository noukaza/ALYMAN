/**
 * @swagger
 *
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - firstName
 *       - lastName
 *       - urlProfilPic
 *       - bio
 *       - createAt
 *       - updateAt
 *       - password
 *     properties:
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
 *       - userId
 *       - url
 *       - description
 *       - createAt
 *       - updateAt
 *     properties:
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
 *       - IdUserFrom
 *       - IdUserTo
 *       - createAt
 *     properties:
 *       IdUserFrom:
 *         type: integer
 *       IdUserTo:
 *         type: integer
 *       createAt:
 *         type: string
 *   Like:
 *     type: object
 *     required:
 *       - IdImage
 *       - IdUser
 *       - createAt
 *     properties:
 *       IdImage:
 *         type: integer
 *       IdUser:
 *         type: integer
 *       createAt:
 *         type: string
 *   Comments:
 *     type: object
 *     required:
 *       - IdImage
 *       - IdUser
 *       - comment
 *       - createAt
 *     properties:
 *       IdImage:
 *         type: integer
 *       IdUser:
 *         type: integer
 *       comment:
 *          type: string
 *       createAt:
 *         type: string
 */