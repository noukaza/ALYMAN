
const Follower = require("../models/follower");
const User = require("../models/user");

exports.get_all_followers = (req, res, next) => {
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
    User.find({
        email: req.body.follower.email
    })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                User.find({
                    email: req.body.follower.email
                })
                    .exec()
                    .then(user => {
                        if (user.length >= 1) {
                            const follower = new Follower({
                                    id: req.body.id,
                                    follower: req.body.follower,
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