
const Follower = require("../models/follower");
const User = require("../models/user");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const response = require("../configurations/responsesTempalte");

exports.get_all_followers = async (req, res, next) => {
    let followers = await Follower
    .find()
    .select("_id follower following create_at")
    .populate("follower following","_id firstName lastName")
    .exec()
    .catch(err =>{
        response(res, 404, false, "error", err)
    })
    // TODO change message 
    followers.length === 0
    ? response(res, 404, false, " 404 ") 
    : response(res, 200, true, "successful operation", followers)
}

exports.create_follower = async (req, res, next) => {
    const id = req.userData._id;
    let user = await  User
    .findOne({_id: id})
    .exec()
    .catch(err => {
        response(res, 500, false, "error", err)
    });
    if (user) {
        let following = await User.findOne({
            _id: req.body.following
        }).select("password").exec().catch(err=> response(res, 409, false, "following n'existe pas", err))
        if(following){
            const follower = new Follower({
                _id: mongoose.Types.ObjectId(),
                follower: user,
                following: following,
                create_at: req.body.create_at
            })
            follow = await follower.save();

            response(res, 201, true, "successful operation", follow)
        }
    }
}

exports.delete_follower = (req, res, next) => {
    id = req.userData._id;
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