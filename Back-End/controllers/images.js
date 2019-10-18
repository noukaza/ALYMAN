const mongoose = require("mongoose");

const User = require("../models/user");
const Image = require("../models/image");

exports.get_all_images = (req, res, next) => {
    Image
        .find()
        .select("_id user image likes comments description create_at update_at")
        //.populate("images")
        .exec()
        .then(data => {
            res.status(200).json(data)
        }).catch(err => console.log(err))
};

exports.create_image = (req, res, next) => {

         User.find({
                    _id: req.body.user
                })
                    .exec()
                    .then(user => {
                        if (user.length >= 1) {
                            const image = new Image({
                                    _id: mongoose.Types.ObjectId(),
                                    user: req.body.user,
                                    image: req.body.image,
                                    likes: req.body.likes,
                                    comments: req.body.comments,
                                    description: req.body.description,
                                    create_at: req.body.create_at,
                                    update_at: req.body.update_at
                                })
                            image
                                .save()
                                .then(data => {
                                    res.status(201).json(data)
                                })
                                .catch(err => {
                                    res.status(500).json({
                                        error: err
                                    })
                                })                        } else {
                            res.status(409).json({
                                message: "l'utilisateur n'existe pas"
                            })
                        }
                    
        });
}

exports.delete_image = (req, res, next) => {
    Image.remove({ _id: req.params.id })
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

exports.update_image = (req, res, next) => {
    const image = {
        id_image: req.params.id,
        description: req.body.description
    };
    res.status(201).json(image)
}