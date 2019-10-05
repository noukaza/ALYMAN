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
    const comment = {
      id_comment : req.body.id_comment,
      id_image : req.body.id_image,
      id_user : req.body.id_user,
      comment : req.body.comment,
      create_at : req.body.comment
    };

    res.status(201).json(comment)
});

/* DELETE method*/
router.delete("/:id",(req, res, next)=> {
    const comment = {
        id_comment : req.params.id
    };

    res.status(202).json(comment)
      
});

/*Update method */
router.put("/:id",(req,res, next)=>{
    const comment = {
        id_comment : req.params.id,
        comment : req.body.comment
    };
    res.status(201).json(comment)
});
module.exports = router;
