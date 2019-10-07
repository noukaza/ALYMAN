const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    image: { type: mongoose.Schema.Types.ObjectId, ref: 'Image', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    comment: { type: String, required: true },
    create_at: { type: String, default: new Date().toISOString() },
    update_at: { type: String, default: new Date().toISOString() }
});

module.exports = mongoose.model("Comment", commentSchema);