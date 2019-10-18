const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Commente = require("../models/like");
const User = require("../models/user");
const Image = require("../models/image");

exports.get_all_comments = (req, res, next) => {
    Commentes
    .find()
    .select("_id image user comment create_at update_at")
    //.populate("images")
    .exec()
    .then(data => {
        res.status(200).json(data)
    }).catch(err => console.log(err))
}

exports.post_comment = (req, res, next) => {
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
                            const commente = new Commente({
                                    _id: mongoose.Types.ObjectId(),
                                    image: req.body.image,
                                    user: req.body.user,
                                    comment: req.body.comment,
                                    create_at: req.body.create_at,
                                    update_at:req.body.update_at
                                })
                            commente
                                .save()
                                .then(data => {
                                    res.status(201).json(data)
                                })
                                .catch(err => {
                                    res.status(500).json({
                                        error: err
                                    })
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
}

exports.update_comment = (req, res, next) => {
    const comment = {
        id_comment: req.params.id,
        comment: req.body.comment
    };
    res.status(201).json(comment)
}