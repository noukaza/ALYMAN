const express = require('express');
const router = express.Router();

/* GET method */
router.get("/:id", (req, res, next) => {
    const id = req.params.id
   res.json({
       id : id
   })
});

/* POST method */
router.post("/", (req, res, next) => {
    const like = {
      _id : req.body.id_like,
      id_image : req.body.id_image,
      id_user : req.body.id_user,
      create_at : req.body.create_at

    };
    res.status(201).json(like)
});
router.delete("/:id", (req, res, next) => {
    const id = req.params.id

    res.status(202).json(id)
});


module.exports = router;