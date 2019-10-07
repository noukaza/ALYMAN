const mongoose = require("mongoose");

const followerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    follower: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    following: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    create_at: { type: String, default: new Date().toISOString() }
});

module.exports = mongoose.model("Follower", followerSchema);