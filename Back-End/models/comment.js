const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    _id_comment: mongoose.Schema.Types.ObjectId,
    id_image : { type : mongoose.Schema.Types.ObjectId, ref : Image, required: true },
    id_user : { type : mongoose.Schema.Types.ObjectId,ref : User, required: true },
    comment: { type: String, required: true },
    create_at: { type: String, default: new Date().toISOString() },
    update_at: { type: String, default: new Date().toISOString() }
});

module.exports = mongoose.model("Comment", commentSchema);