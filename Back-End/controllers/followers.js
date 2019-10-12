const Follower = require("../models/follower");
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
    const follower = {
        id_follow: req.body.id_follow,
        id_user_from: req.body.id_user_from,
        id_user_to: req.body.id_user_to,
        create_at: req.body.create_at
    };
    res.status(201).json(follower)
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