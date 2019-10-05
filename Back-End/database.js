const mongoose = require("mongoose");
const dbPath = "mongodb+srv://mohand:Sofia2004@cluster0-hlbkz.mongodb.net/admin?retryWrites=true&w=majority";

mongoose.connect(dbPath);
 
const like = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id_image: String,
  id_user: String,
  create_at: String
});
const likes = mongoose.model("like",like);
let like_db = new likes({
  _id: "qsmkdqsdk",
  id_image: "qsdlk",
  id_user: "qsdlk",
  create_at: "qmlskd"
})

module.exports = mongoose;