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
        email: req.body.email
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
                            const image = new Image({
                                    _id: req.body.id_like,
                                    id_image: req.body.id_image,
                                    id_user: req.body.id_user,
                                    create_at: req.body.create_at,
                                    update_at:req.body.update_at
                                })
                            image
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