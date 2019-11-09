const mongoose = require("mongoose");

const User = require("../models/user");
const Image = require("../models/image");
const response = require("../configurations/responsesTempalte");

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
                    _id: req.userData._id
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
                                    response(res, 200, true, "ok", data)
                                })
                                .catch(err => {
                                    response(res, 500, false, "error", err)
                                })                       
                            } 
                                else {
                                    response(res, 500, false, "error", err)
                        }
                    
        });
}

exports.delete_image = (req, res, next) => {
    Image
    .findById({ _id: req.params.id })
    .exec()
    .then(data => {
        if (data.user == req.userData._id )  {
            Image.remove({ _id: req.params.id })
            .exec()
            .then(result => {
                response(res, 200, true, "done", result)
    })
    .catch(err => {
        response(res, 500, false, "error", err)
    })
        } else {
            response(res, 409, false, "Wrong user", err)

        }
    }).catch(err => console.log(err));
}

exports.update_image = (req, res, next) => {
    Image.find({
        image: req.body.image
    })
        .exec()
        .then(img => {
            if (img.length >= 1 && img.user == req.userData._id ) {
                if(req.body.user) img.user = req.body.user
                if(req.body.image) img.image = req.body.image
                if(req.body.likes) img.likes = req.body.likes
                if(req.body.comments) img.comments = req.body.comments
                if(req.body.description) img.description = req.body.description
                img
                    .save()
                    .then(data => {
                        response(res, 201, true, "successful operation", data)
                    })
                    .catch(err => {
                        response(res, 500, false, "error", err)
                    })                        }
                     else {
                        response(res, 409, false, "l'image n'existe pas ou l'utilisateur na pas le droit", err)
            }
        })
        .catch(err => {
            response(res, 500, false, "error", err)
        });
}