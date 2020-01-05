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
                console.log(img)
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
                            res.status(201).json(data) // TODO : serlaize new data 
                        })
                        .catch(err => {
                            res.status(500).json({
                                error: err
                            })
                        })
                } else {
                    res.status(409).json({
                        message: "l'image n'existe pas"
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            });
   


}

exports.delete_comment = (req, res, next) => {
    //TODO : verify that the user is the owner of the pic using the token
    Commente.remove({
            _id: req.params.id
        })
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

exports.update_comment = (req, res, next) => {
    const comment = {
        id_comment: req.params.id,
        comment: req.body.comment
    };
    res.status(201).json(comment)
}

exports.get_comments_for_image = async (req, res, next) => {
    console.log("id" ,req.params.id)
    let comments = await Commente.find({
        image: req.params.id
    }).exec();
    response(res, 200, true, "", comments)


}