const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Like = require("../models/like");
const Image = require("../models/image");
const response = require("../configurations/responsesTempalte");

exports.get_like_by_id = (req, res, next) => {
    Like
        .find()
        .select("_id user create_at update_at")
        .exec()
        .then(data => {
            response(res, 200, true, "like has been recovered", data)
        }).catch(err => {
            response(res, 500, false, "error", err)
        })
}

exports.poste_like = (req, res, next) => {
    Image.findOne({
            _id: req.body.image
        })
        .exec()
        .then(img => {
            if (img) {
                Like.findOne({user: req.userData._id,
                    image: req.body.image,}).exec().then(dataImage =>{
                        if(!dataImage){
                            const like = new Like({
                                _id: mongoose.Types.ObjectId(),
                                user: req.userData._id,
                                image: req.body.image,
                            })
                            like
                                .save()
                                .then(data => {
                                    img.likes++;
                                    img.save()
                                    response(res, 201, true, "you made a like on the picture", data)
                                })
                                .catch(err => {
                                    response(res, 500, false, "error", err)
                                })
                        }else{
                            response(res, 500, false, "like existe",dataImage)
                        }
                    }).catch(err =>{
                        response(res, 501, false, "errorr")
                    })
            } else {
                response(res, 404, false, "you like an image that doesn't exist", err)
            }
        })
        .catch(err => {
            response(res, 500, false, "error", err) 
        });

}

exports.delete_like = (req, res, next) => {
    id = req.userData._id;
    Like
        .findOne({
            image: req.params.id,
            user : req.userData._id
        })
        .exec()
        .then(data => {
            if (data.user == id) {
                Like.remove({
                    image: req.params.id,
                    user : req.userData._id
                    })
                    .exec()
                    .then(result => {
                        Image.findOne({_id: data.image}).exec().then(d =>{
                            d.likes--;
                            d.save();
                        })
                        response(res, 200, true, "Like has been deleted ")
                        
                    })
                    .catch(err => {
                        response(res, 500, false, "error", err) 
                    })
            } else {
                response(res, 404, false, "can not delete like, it doesn't belong to you", err)
                
            }
        }).catch(err => {
            response(res, 500, false, "error", err)
        });
}