
const Follower = require("../models/follower");
const User = require("../models/user");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const response = require("../configurations/responsesTempalte");

exports.get_all_followers = (req, res, next) => {
    // TODO : remove this route
    Follower
    .find()
    .select("_id follower following create_at")
    //.populate("images")
    .exec()
    .then(data => {
        response(res, 200, true, "successful operation", data)
    }).catch(err =>{
        response(res, 404, false, "error", err)
    })
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
                                    response(res, 201, true, "successful operation", data)
                                })
                                .catch(err => {
                                    response(res, 500, false, "error", err)
                                })                        }
                                 else {
                                    response(res, 409, false, "following n'existe pas", err)
                        }
                    })
                    .catch(err => {
                        response(res, 500, false, "error", err)
                    });
            } else {
                response(res, 409, false, "follower n'existe pas", err)
            }
        })
        .catch(err => {
            response(res, 500, false, "error", err)
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
                response(res, 200, true, "Follower supprimer ")
    })
    .catch(err => {
        response(res, 500, false, "error", err)
    })
        } else {
            response(res, 409, false, "c'est pas le bon following", err)
        }
    }).catch(err =>{ 
        response(res, 500, false, "error", err)
    });
}