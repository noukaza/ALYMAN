const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const response = require("../configurations/responsesTempalte");
const User = require("../models/user");
const Follower = require('../models/follower');
const Images = require("../models/image");

// TODO make this func async 
exports.create_user = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            response(res, 500, false, "error", err)
        } else {
            let filePath = process.env.DEFAULT_PORFIL_IMAGE;
            try {
                filePath = req.file.path
            } catch (e) {}
            const user = new User({
                _id: mongoose.Types.ObjectId(),
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                profileImage: filePath,
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

// TODO make it async
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


exports.login_user = async (req, res, next) => {
    let user = await User.find({
        email: req.body.email
    }).exec().catch(err => response(res, 500, false, "Auth failed", err));
    if (user.length < 1) {
        response(res, 401, false, "Auth failed")
    } else {
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            err ? response(res, 401, false, "Auth failed", err) : null;
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
                response(res, 401, false, "Auth failed")
            }

        })
    }

}

exports.get_all_user = async (req, res, next) => {
    const ID = req.userData._id
    let users = await User.findOne({
        _id: ID
    }).select("_id firstName lastName profileImage bio email").catch(err => response(res, 404, false, "errr", err));
    (users.length === 0) ?
    response(res, 404, false, "Zero user find"): response(res, 200, true, "successful operation", users)
}

exports.get_user_by_id = async (req, res, next) => {

    let user = await User
        .findOne({
            _id: req.params.id
        })
        .select("_id firstName lastName profileImage bio email followers followings")
        .populate({
            path: 'followers',
            model: 'Follower'
        })
        .exec()
        .catch(err => response(res, 404, false, "can't find user"));

    (user.length === 0) ?
    response(res, 404, false, "can't find user"): response(res, 200, true, "successful operation", user)
}

exports.get_follower_for_user = async (req, res, next) => {
    let follower = await Follower.find({
            follower: req.params.id
        }).select("_id create_at following ").populate(" following", "_id firstName lastName profileImage")
        .exec()
        .catch(err => response(res, 404, false, "can't find user"));
    // (follower.length === 0) ?
    // response(res, 404, false, "can't find user"): 
    response(res, 200, true, "successful operation", follower);
}


exports.get_followings_for_user = async (req, res, next) => {
    let follower = await Follower.find({
            following: req.params.id
        }).select("_id create_at follower ").populate(" follower", "_id firstName lastName profileImage")
        .exec()
        .catch(err => response(res, 404, false, "can't find user"));

    response(res, 200, true, "successful operation", follower);
}


exports.get_images_for_user = async (req, res, next) => {
    let images = await Images.find({
        user: req.params.id
    }).exec().catch(err => response(res, 404, false, "error")); // TODO change msg
    response(res, 200, true, "successful operation", images);
}

exports.edit_user = async (req, res, next) => {
    let user = await User.findOne({
        _id: req.userData._id
    }).exec()
    if (req.body) {
        if (req.body.password && req.body.oldPassword) {
            bcrypt.compare(req.body.oldPassword, user.password, (err, result) => {
                err ? response(res, 401, false, "Auth failed", err) : null;
                if (result) {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        if (err) {
                            response(res, 400, true, "error")
                        } else {
                            user.password = hash
                            response(res, 200, true, "successful operation")
                        }
                    })
                } else {
                    response(res, 401, false, "Auth failed")
                }
            })
        }

        if (req.body.firstName) {
            user.firstName = req.body.firstName
        }
        if (req.body.lastName) {
            user.lastName = req.body.lastName
        }
        if (req.body.email) {
            user.email = req.body.email
        }
        if(req.file){
            user.profileImage = req.file.path
        }
        user.save()
        response(res, 200, true, "successful operation")


    } else {
        response(res, 400, false, "error");
    }

}