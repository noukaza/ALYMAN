const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    profileImage: { type: String, required: false, default: "/uploads/default/profil.png" },
    bio: { type: String, required: false },
    email: { type: String, required: true, match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ },
    password: { type: String, required: true },
    images: { type: Number, default: 0 },
    followers: { type: Number, default: 0 },
    followings: { type: Number, default: 0 },
    create_at: { type: String, default: new Date().toISOString() },
    update_at: { type: String, default: new Date().toISOString() }
});



// userSchema.pre('validate', function() {
//     console.log('this gets printed first');
//   });
//   userSchema.post('validate', function() {
//     console.log('this gets printed second');
//   });
//   userSchema.pre('save', function() {
//     console.log('this gets printed third');
//   });
//   userSchema.post('save', function() {
//     console.log('this gets printed fourth');
//   });


module.exports = mongoose.model("User", userSchema);