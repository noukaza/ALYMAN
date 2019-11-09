const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Commente = require("../models/comment");
const User = require("../models/user");
const Image = require("../models/image");
const response = require("../configurations/responsesTempalte");


exports.post_comment = (req, res, next) => {
    User.find({
        _id: req.userData._id  
    })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                Image.find({
                    image: req.body.image 
                })
                    .exec()
                    .then(img => {
                        if (img.length >= 1) {
                            const commente = new Commente({
                                    _id: mongoose.Types.ObjectId(),
                                    image: req.body.image,
                                    user: req.userData._id, 
                                    comment: req.body.comment,
                                    create_at: req.body.create_at,
                                    update_at:req.body.update_at
                                })
                            commente
                                .save()
                                .then(data => {
                                    response(res, 201, true, "successful operation", data) 
                                })
                                .catch(err => {
                                    response(res, 500, false, "error", err)
                                })                     
                               } else {
                                response(res, 500, false, "wrong image", err)

                        }
                    })
                    .catch(err => {
                        response(res, 500, false, "error", err)
                    });
            } else {
                response(res, 409, false, "Wrong user", err)

            }
        })
        .catch(err => {
            response(res, 500, false, "error", err)
        });
   
}

exports.delete_comment = (req, res, next) => {
    Commente
    .findById({ _id: req.params.id })
    .exec()
    .then(data => {
        if (data.user == req.userData._id )  {
            Commente.remove({ _id: req.params.id })
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

exports.update_comment = (req, res, next) => {
        Commente.find({
            _id: req.body._id
        })
            .exec()
            .then(comment => {
                if (comment.length >= 1 && comment.user == req.userData._id ) {
                    if(req.body.user)  comment.user = req.body.user
                    if(req.body.image) comment.image = req.body.image
                    if(req.body.comment) comment.comment = req.body.comment
                    comment
                        .save()
                        .then(data => {
                            response(res, 201, true, "successful operation", data)
                        })
                        .catch(err => {
                            response(res, 500, false, "error", err)
                        })                        }
                         else {
                            response(res, 409, false, "le commentaire n'existe pas ou l'utilisateur n'a pas le droit", err)
                }
            })
            .catch(err => {
                response(res, 500, false, "error", err)
            });
}