const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Commente = require("../models/comment");
const User = require("../models/user");
const Image = require("../models/image");


exports.post_comment = (req, res, next) => {
    User.find({
        _id: req.userData._id  
    })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                Image.find({
                    image: req.body.image 
                })
                    .exec()
                    .then(img => {
                        if (img.length >= 1) {
                            const commente = new Commente({
                                    _id: mongoose.Types.ObjectId(),
                                    image: req.body.image,
                                    user: req.userData._id, 
                                    comment: req.body.comment,
                                    create_at: req.body.create_at,
                                    update_at:req.body.update_at
                                })
                            commente
                                .save()
                                .then(data => {
                                    response(res, 201, true, "successful operation", data) 
                                })
                                .catch(err => {
                                    response(res, 500, false, "error", err)
                                })                     
                               } else {
                            res.status(409).json({
                                message: "l'image n'existe pas" 
                            })
                        }
                    })
                    .catch(err => {
                        res.status(500).json({
                            error: err
                        })
                    });
            } else {
                res.status(409).json({
                    message: "l'utilisateur n'existe pas"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });
   
}

exports.delete_comment = (req, res, next) => {
    Commente
    .findById({ _id: req.params.id })
    .exec()
    .then(data => {
        if (data.user == req.userData._id )  {
            Commente.remove({ _id: req.params.id })
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
        } else {
            res.status(409).json({
                message: "Wrong user"
            });
        }
    }).catch(err => console.log(err));
}

exports.update_comment = (req, res, next) => {
    const comment = {
        id_comment: req.params.id,
        comment: req.body.comment
    };
    res.status(201).json(comment)
}