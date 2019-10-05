const express = require('express');
const router = express.Router();

/* GET method */
router.get("/", (req, res, next) => {
   res.status(200).json({
       message : "hi"
   })
});

/* POST method */
router.post("/", (req, res, next) => {
    const follower = {
      id_follow : req.body.id_follow,
      id_user_from : req.body.id_user_from,
      id_user_to : req.body.id_user_to,
      create_at : req.body.create_at
    };

    res.status(201).json(follower)
});


router.delete("/:id", (req, res, next) => {
  const id = req.params.id
  const follower = {
    _id : id
  };

  res.status(202).json(follower)
});


module.exports = router;