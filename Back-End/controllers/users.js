const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const response = require("../configurations/responsesTempalte");
const User = require("../models/user");
const Follower = require('../models/follower');

// TODO make this func async 
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
        response(res, 401, false, "Auth failed", err)
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
                response(res, 401, false, "Auth failed", err)
            }

        })
    }

}

exports.get_all_user = async (req, res, next) => {
    let users = await User.find().select("_id firstName lastName profileImage bio email").catch(err => response(res, 404, false, "errr", err));
    (users.length === 0)
    ? response(res, 404, false, "Zero user find")
    : response(res, 200, true, "successful operation", users)
}

exports.get_user_by_id = async (req, res, next) => {
    let user = await User
        .find({
            _id: req.params.id
        })
        .select("_id firstName lastName profileImage bio email followers followings")
        .populate("followers ")
        .exec()
        .catch(err => response(res, 404, false, "can't find user"));

    (user.length === 0) 
    ? response(res, 404, false, "can't find user") 
    : response(res, 200, true, "successful operation", user)
}

exports.get_follower_for_user = async (req, res, next) => {
    let follower = await Follower.find({
            followers: req.params._id
        })
        .exec()
        .catch(err => response(res, 404, false, "can't find user"));
    (follower.length === 0 ) 
    ? response(res, 404, false, "can't find user")
    : response(res, 200, true, "successful operation", follower);
}


exports.get_followings_for_user = async (req, res, next) => {
    let following = await Follower.find({
            followings: req.params._id
        })
        .exec()
        .catch(err => response(res, 404, false, "can't find user"));
    (following.length === 0)
    ? response(res, 404, false, "can't find user")
    : response(res, 200, true, "successful operation", following);
}