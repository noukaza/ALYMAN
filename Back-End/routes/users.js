const express = require('express');
const router = express.Router();


const exemple_user = {
  _id : "qlmksjdqlskmdj",
  first_name : "first name",
  last_name : "last name",
  url_profil_pic : "/up/lkjqklsfghqosdimf.png",
  bio : "est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lore",
  email :  "myEmail@gmail.Com" 
};

/* GET method */
router.get("/", (req, res, next) => {
  //TODO : With mongo get all user 
 
  const users = [
   exemple_user,
   exemple_user,
   exemple_user,
   exemple_user,
   exemple_user,
   exemple_user,
   exemple_user,
  ];
  
  const exemple = {  
    count : users.length,
    users : users
  }
   res.status(200).json(exemple)
});

/**
 * @swagger
 * /users:
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
router.post("/", (req, res, next) => {
    const expect_format_user = {
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      bio : req.body.bio,
      email :  req.body.email,
      password : req.body.password
    }
    const user = {
      ...expect_format_user,
      _id : "qksjdlkqjsd",
      //TODO: hash password
      password : "hash password",
      create_at : new Date(),
      update_at : new Date()
    };
    res.status(201).json(user)
});


router.get("/:id", (req, res, next) => {
  const id = req.params.id
  const user = {
    ...exemple_user,
    _id : id,
    create_at : new Date(),
    update_at : new Date()
  };

  res.status(200).json(user)
});


module.exports = router;