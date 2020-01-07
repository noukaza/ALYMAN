const mongoose = require("mongoose");

const User = require("../models/user");
const Image = require("../models/image");
const response = require("../configurations/responsesTempalte");

exports.get_all_images = async (req, res, next) => {
    let page = req.query.page
    let limit = req.query.prePage
    if(page){
        page = parseInt(page,10) > 0 ? parseInt(page,10) : 1;
    }
    if(limit){
        limit = parseInt(limit,10) > 0 && limit <= 10 ? parseInt(limit,10): 10 ;
    }
 
    const option = {
        page: parseInt(page,10) || 1,
        limit: parseInt(limit,10) || 10,
        populate:"user",
        sort:     { create_at: -1 },
        select:"_id user image likes comments description create_at "
    }
    let id = req.userData._id 
    let me = await User.findOne({_id :  id}).select().exec();
        let img = await Image
        .paginate({user: { $in: [...me.followers , id]   }},option)
        img.docs.forEach(image =>{
            const {_id, lastName, firstName,profileImage} = image.user
            Image.user= {}
            image.user = {
                _id, lastName, firstName,profileImage
            }
        })
    response(res, 200, true, "successful operation", img)
};

exports.create_image = (req, res, next) => {
    let filePath = null;
    try {
        filePath = req.file.path
    } catch (e) {}
    if (filePath !== null) {
        const image = new Image({
            _id: mongoose.Types.ObjectId(),
            user: req.userData._id,
            image: req.file.path,
            description: req.body.description,
        })
        image
            .save()
            .then(data => {
                response(res, 201, true, "successful operation", data)
            })
            .catch(err => {
                response(res, 500, false, "error", err)
            })
    } else {
        response(res, 401, false, "the picture is missing") //TODO wish stat code to use
    }
}

exports.delete_image = (req, res, next) => {
    Image.remove({
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
                        response(res, 409, false, "the image does not exist or the user does not have the privilege", err)
            }
        })
        .catch(err => {
            response(res, 500, false, "error", err)
        });
}