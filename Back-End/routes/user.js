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
    const user = {
      name : req.body.name
    };

    res.status(201).json(user)
});


router.get("/:id", (req, res, next) => {
  const id = req.params.id
  const user = {
    _id : id
  };

  res.status(200).json(user)
});


module.exports = router;