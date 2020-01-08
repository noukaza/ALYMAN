const mongoose = require("mongoose");
const response = require("../configurations/responsesTempalte");

const Commente = require("../models/comment");
const User = require("../models/user");
const Image = require("../models/image");


exports.post_comment = (req, res, next) => {
    let userID = req.userData._id;
        Image.find({
                _id: req.body.image
            })
            .exec()
            .then(img => {
                if (img.length >= 1) {
                    const commente = new Commente({
                        _id: mongoose.Types.ObjectId(),
                        image: req.body.image,
                        user: userID, 
                        comment: req.body.comment,
                        create_at: req.body.create_at,
                        update_at: req.body.update_at
                    })
                    commente
                        .save()
                        .then(data => {
                            res.status(200).json(data)
                        })
                        .catch(err => {
                            res.status(500).json({
                                error: err
                            })
                        })
                } else {
                    res.status(404).json({
                        message: "the picture does not exist"
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            });
}

exports.delete_comment = async (req, res, next) => {
    Commente.remove({
            user: req.userData._id,
            _id: req.params.id
        })
        .exec()
        .then(result => {
            if(result.n ===1){
                response(res, 200, true, "done")
            }else{
                response(res, 404, false, "error it's not your comment !")
            }
        })
        .catch(err => {
            response(res, 500, false, "Error",err)

        })
}

exports.update_comment = async (req, res, next) => {
    let comment = await Commente.findOne({
        _id:req.params.id,
        user : req.userData._id
    })
    if(comment){
        if(req.body.comment){
            commente.comment = req.body.comment
            commente.save()
        }
        response(res, 200, true, "done",commente)
    }else{
        response(res, 500, false, "error")
    }
}

exports.get_comments_for_image = async (req, res, next) => {
    let comments = await Commente.find({
        image: req.params.id
    }).populate("user","profileImage firstName lastName _id").exec();
    response(res, 200, true, "", comments)
}