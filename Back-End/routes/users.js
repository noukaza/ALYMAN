const express = require('express');
const router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const config_storag = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/profile_image/')
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname)
  }
});
const filerFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" | file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const upload = multer({
  storage: config_storag,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: filerFilter
})

/**
 * @swagger
 * /user:
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
router.post("/", upload.single("profileImage"), (req, res, next) => {
  User.find({
    email: req.body.email
  })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        res.status(409).json({
          message: "Mail exists"
        })
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            res.status(500).json({
              error: "failed to creat user"
            })
          } else {
            const user = new User({
              _id: mongoose.Types.ObjectId(),
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              profileImage: req.file.path,
              bio: req.body.bio,
              email: req.body.email,
              password: hash
            })
            user
              .save()
              .then(data => {
                res.status(201).json(data)
              })
              .catch(err => {
                res.status(500).json({
                  error: err
                })
              })
          }
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    });


});


router.delete('/:id', (req, res, next) => {
  User.remove({ _id: req.params.id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Done !"
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    })
})


router.post("/login", (req, res, next) => {
  User.find({ email: req.body.email }).exec()
    .then(user => {
      if (user.length < 1) {
        res.status(401).json({
          message: 'Auth failed'
        })
      } else {
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (err) {
            res.status(401).json({
              message: 'Auth failed'
            })
          }
          if (result) {
            const token = jwt.sign({
              email: user[0].email,
              _id: user[0]._id
            },
              process.env.JWT_KEY,
              {
                expiresIn: "1 days"
              })
            res.status(200).json({
              message: 'Auth successful',
              token: token
            })
          } else {
            res.status(401).json({
              message: 'Auth failed'
            })
          }

        })
      }

    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    })
})


router.get('/', (req, res, next) => {
  User.find().select("_id firstName lastName profileImage bio email Images comments likes followers followings").exec().then(data => {
    res.status(200).json(data)
  }).catch(err => console.log(err))

})
module.exports = router;