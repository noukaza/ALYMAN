const mongoose = require("mongoose");

const User = require("../models/user");
const Image = require("../models/image");
const Comment = require("../models/comment");

const response = require("../configurations/responsesTempalte");

exports.get_all_images = async (req, res, next) => {
    let page = req.query.page
    let limit = req.query.prePage
    if (page) {
        page = parseInt(page, 10) > 0 ? parseInt(page, 10) : 1;
    }
    if (limit) {
        limit = parseInt(limit, 10) > 0 && limit <= 10 ? parseInt(limit, 10) : 10;
    }
    const option = {
        page: parseInt(page, 10) || 1,
        limit: parseInt(limit, 10) || 10,
        populate: "user",
        sort: {
            create_at: -1
        },
        select: "_id user image likes comments description create_at "
    }
    let id = req.userData._id
    let me = await User.findOne({
        _id: id
    }).select().exec();
    let img = await Image
        .paginate({
            user: {
                $in: [...me.followers, id]
            }
        }, option)
    img.docs.forEach(image => {
        const {
            _id,
            lastName,
            firstName,
            profileImage
        } = image.user
        Image.user = {}
        image.user = {
            _id,
            lastName,
            firstName,
            profileImage
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
        response(res, 401, false, "the picture is missing")
    }
}

exports.delete_image = (req, res, next) => {
    Image.remove({
            _id: req.params.id,
            user: req.userData._id
        })
        .exec()
        .then(result => {
                Comment.remove({image :req.params.id })
                    .exec()
                    .then(_ => response(res, 200, false, "successful operation"))
                    .catch(e =>{
                        response(res, 200, false, "successful operation")
                    })
        })
        .catch(err => {
            console.log(err)
            response(res, 500, false, "error", err)

        })
}

exports.update_image = (req, res, next) => {
    console.log(req.body)
    Image.findOne({
            _id: req.params.id
        })
        .exec()
        .then(img => {
            if (img && img.user == req.userData._id) {
                if (req.body.description) img.description = req.body.description
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
        .catch(e => {
            console.log(e);
            response(res, 500, false, "error", err)
        });
}