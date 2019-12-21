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
    // preValidate
});
followerSchema.post('validate', function () {
    //postValidate

});
followerSchema.pre('save', function () {
    // return new Promise((resolve, reject) => {
    //     reject(new Error('something went wrong'));
    //   });
    // throw new Error('something went wrong');

    //PreSave
});
followerSchema.post('save', async function () {
    // throw new Error('something went wrong');
    let follower = await user.findOne(this.follower._id)
        .select(" _id firstName lastName profileImage followers followings")
        .exec();

    let following = await user.findOne(this.following._id)
        .select(" _id firstName lastName profileImage followers followings")
        .exec();
    // console.log(follower.followers)
     follower.followers.push(following);
    await follower.save();
    
    following.followings.push(follower);   
    await following.save();
    //postSave
    // console.log(follower)

});


module.exports = mongoose.model("Follower", followerSchema);