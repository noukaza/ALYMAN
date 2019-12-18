const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require('axios');


const response = require("../configurations/responsesTempalte");
const User = require("../models/user");
const Follower = require('../models/follower');

exports.create_user = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            response(res, 500, false, "error", err)
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
                    response(res, 201, true, "successful operation", data)
                })
                .catch(err => {
                    response(res, 500, false, "error", err)
                })
        }
    });


}

exports.delets_user = (req, res, next) => {
    if (req.userData._id === req.params.id) {
        User.remove({
                _id: req.params.id
            })
            .exec()
            .then(result => {
                response(res, 200, true, "Done ! has been deleted  ")
            })
            .catch(err => {
                response(res, 500, false, "user notfond ", err)
            })
    } else {
        response(res, 401, false, "you are not the user ")
    }

}


exports.login_user = (req, res, next) => {
    User.find({
            email: req.body.email
        }).exec()
        .then(user => {
            if (user.length < 1) {
                response(res, 401, false, "Auth failed", err)
            } else {
                bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                    if (err) {
                        response(res, 401, false, "Auth failed", err)
                    }
                    if (result) {
                        const token = jwt.sign({
                                email: user[0].email,
                                _id: user[0]._id
                            },
                            process.env.JWT_KEY, {
                                expiresIn: "1 days"
                            })

                        response(res, 200, true, "Auth successful", {
                            token
                        })
                    } else {
                        response(res, 401, false, "Auth failed", err)
                    }

                })
            }

        })
        .catch(err => {
            response(res, 500, false, "Auth failed", err)
        })
}

exports.get_all_user = (req, res, next) => {
    User
        .find()
        .select("_id firstName lastName profileImage bio email")
        .exec()
        .then(data => {
            response(res, 200, true, "successful operation", data)
        }).catch(err => {
            response(res, 404, false, "errr", err)
        })
}

exports.get_user_by_id = (req, res, next) => {
    User
        .find({
            _id: req.params.id
        })
        .select("_id firstName lastName profileImage bio email followers")
        .exec()
        .then(data => {
            // TODO : make req to get follower we may do it with axios 
            data[0].followers = `users/${data[0]._id}/followers`;
            response(res, 200, true, "successful operation", data)
        })
        .catch(err => {
            response(res, 404, false, "can't find user")
        })
}

exports.get_follower_for_user = (req, res, next) => {
    //TODO get follower for this user
    console.log(req.params.id)
    response(res, 200, true, "successful operation")
}