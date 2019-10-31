
const Follower = require("../models/follower");
const User = require("../models/user");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

exports.get_all_followers = (req, res, next) => {
    // TODO : remove this route
    Follower
    .find()
    .select("_id follower following create_at")
    //.populate("images")
    .exec()
    .then(data => {
        res.status(200).json(data)
    }).catch(err => console.log(err))
}

exports.create_follower = (req, res, next) => {
    id = req.userData._id;
    User.find({
        _id: id // TODO GET user id from token 
    })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                User.find({
                    _id: req.body.following
                })
                    .exec()
                    .then(user => {
                        if (user.length >= 1) {
                            const follower = new Follower({
                                    _id: mongoose.Types.ObjectId(),
                                    follower: id,
                                    following: req.body.following,
                                    create_at: req.body.create_at
                                })
                            follower
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
                                message: "following n'existe pas"
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
                    message: "follower n'existe pas"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });
   
}

exports.delete_follower = (req, res, next) => {
    //TODO : verify that the user is the follower or following in this case
    id = req.userData._id;
    console.log(req.params.id);
    Follower
    .findById({ _id: req.params.id })
    .exec()
    .then(data => {
        if (data.follower == id  || data.following == id)  {
            Follower.remove({ _id: req.params.id })
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
                message: "following n'existe pas"
            });
        }
    }).catch(err => console.log(err));

 
    Follower.remove({ _id: req.params.id })
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