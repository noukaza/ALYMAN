const mongoose = require("mongoose");
const user = require("./user");

const followerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    following: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    create_at: {
        type: String,
        default: new Date().toISOString()
    }
});

followerSchema.pre('validate', function () {
    
});
followerSchema.post('validate', function () {
    

});
followerSchema.pre('save', function () {

});
followerSchema.post('save', async function () {
   
    let follower = await user.findOne(this.follower._id)
        .select(" _id firstName lastName profileImage followers followings")
        .exec();

    let following = await user.findOne(this.following._id)
        .select(" _id firstName lastName profileImage followers followings")
        .exec();
     follower.followers.push(following);
    await follower.save();
    
    following.followings.push(follower);   
    await following.save();
   
});


module.exports = mongoose.model("Follower", followerSchema);