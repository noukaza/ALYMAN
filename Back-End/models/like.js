const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    image: { type: mongoose.Schema.Types.ObjectId, ref: 'Image', required: true },
    create_at: { type: String, default: new Date().toISOString() },
    update_at: { type: String, default: new Date().toISOString() }
});

module.exports = mongoose.model("Like", likeSchema);