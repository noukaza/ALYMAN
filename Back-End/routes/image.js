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
    const image = {
      id_image: req.body.id_image,
      id_user : req.body.id_user,
      url : req.body.url,
      description : req.body.description,
      create_at: req.body.create_at,
      update_at: req.body.update_at
    };

    res.status(201).json(image)
});

/* DELETE method */
router.delete("/:id", (req, res, next) => {
    const image = {
      id_image: req.params.id
    };

    res.status(202).json(image)
});


/* UPDATE method */
router.put("/:id", (req, res, next) => {
    const image = {
      id_image: req.params.id,
      description : req.body.description
    };

    res.status(201).json(image)
});

module.exports = router;