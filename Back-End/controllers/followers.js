const Follower = require("../models/follower");
const User = require("../models/user");
const mongoose = require("mongoose");
const response = require("../configurations/responsesTempalte");

exports.get_all_followers = async (req, res, next) => {
    let followers = await Follower
        .find()
        .select("_id follower following create_at")
        .populate("follower following", "_id firstName lastName")
        .exec()
        .catch(err => {
            response(res, 404, false, "error", err)
        })
    followers.length === 0 ?
        response(res, 404, false, " 404 ") :
        response(res, 200, true, "successful operation", followers)
}

exports.create_follower = async (req, res, next) => {
    if(req.userData._id === req.body.following){
        response(res, 500, false, "you can't follow yourself")
    }else{
        const id = req.userData._id;
        let user = await User
            .findOne({
                _id: id
            })
            .select(" _id firstName lastName profileImage")
            .exec()
            .catch(err => {
                response(res, 500, false, "error", err)
            });
        if (user) {
            let following = await User.findOne({
                _id: req.body.following
            }).select(" _id firstName lastName profileImage").exec().catch(err => response(res, 409, false, "following does not exist", err))
            if (following) {
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
    
}

exports.delete_follower = (req, res, next) => {
    id = req.userData._id;

    Follower

        .remove({
            following: req.params.id,
            follower: id
        })
        .exec()
        .then(data => {
            data.n !== 0 ?
                response(res, 200, true, "follow has been deleted ") :
                response(res, 400, true, "follow does not exist ")
        })
        .catch(err => {
            response(res, 501, false, "error", err)
        })

}
