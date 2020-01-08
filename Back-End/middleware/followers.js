const Follower = require("../models/follower");
const response = require("../configurations/responsesTempalte");

exports.followAlreadyExists = async (req, res, next) => {
    const follwoer = req.userData._id;
    const following = req.body.following;

    follow = await Follower.find({
        follower: "" + follwoer,
        following: "" + following,

    }).exec();
    
    follow.length !== 0 ?
        response(res, 500, false, "follow exist", follow) :
        next();

}