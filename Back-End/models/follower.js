const mongoose = require("mongoose");
const user =  require("./user");

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

    //PreSave
});
followerSchema.post('save', async function () {
    //postSave
    console.log(this)

});


module.exports = mongoose.model("Follower", followerSchema);