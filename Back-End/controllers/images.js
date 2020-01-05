const mongoose = require("mongoose");

const User = require("../models/user");
const Image = require("../models/image");
const response = require("../configurations/responsesTempalte");

exports.get_all_images = async (req, res, next) => {
    let id = req.userData ? req.userData._id : "5e0f6b4eb3eb6e0d28c2948a"
    let me = await User.findOne({_id :  id}).select().exec();
    let img = await Image
        .find({user: { $in: [...me.followers , id]   }})
        .select("_id user image likes comments description create_at update_at")
        .populate("user")
        .exec().catch(err =>response(res, 404, false, "error", ));
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
        response(res, 401, false, "il manque la photo ") //TODO wish stat code to use
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
    const image = {
        id_image: req.params.id,
        description: req.body.description
    };
    res.status(201).json(image)
}