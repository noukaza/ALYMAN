const mongoose = require("mongoose");

const followerSchema = mongoose.Schema({
    _id_comment: mongoose.Schema.Types.ObjectId,
    id_user_from : { type : mongoose.Schema.Types.ObjectId, ref : User, required: true },
    id_user_to : { type : mongoose.Schema.Types.ObjectId,ref : User, required: true },
    create_at: { type: String, default: new Date().toISOString() }
});

module.exports = mongoose.model("Follower", followerSchema);