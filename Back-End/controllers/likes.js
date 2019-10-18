const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Like = require("../models/like");
const User = require("../models/user");
const Image = require("../models/image");

exports.get_like_by_id = (req, res, next) => {
    Like
        .find()
        .select("_id user create_at update_at")
        //.populate("images")
        .exec()
        .then(data => {
            res.status(200).json(data)
        }).catch(err => console.log(err))
}

exports.poste_like = (req, res, next) => {

    User.find({
        _id: req.body.user
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
                            const like = new Like({
                                    _id: mongoose.Types.ObjectId(),
                                    user: req.body.user,
                                    image: req.body.image,
                                    create_at: req.body.create_at,
                                    update_at:req.body.update_at
                                })
                            like
                                .save()
                                .then(data => {
                                    res.status(201).json(data)
                                })
                                .catch(err => {
                                    res.status(500).json({
                                        error: err
                                    })
                                })                        } else {
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

exports.delete_like = (req, res, next) => {
    Like.remove({ _id: req.params.id })
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
}