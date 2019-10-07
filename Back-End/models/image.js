const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    image: { type: String, required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Like' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    description: { type: String, required: true },
    create_at: { type: String, default: new Date().toISOString() },
    update_at: { type: String, default: new Date().toISOString() }
});

module.exports = mongoose.model("Image", imageSchema);