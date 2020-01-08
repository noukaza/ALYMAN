const response = require("../configurations/responsesTempalte");
const User = require("../models/user");

exports.UserExists = (req, res, next) => {
 
    User.find({
            _id: id
        })
        .exec()
        .then(user => {
            user.length >= 1 ? next() : response(res, 409, false, "user does not exist", err);   
        })
        .catch(err => {
            response(res, 500, false, "error", err) 
        });
}

exports.notUsedEmail = (req, res, next) => {
    User.find({
            email: req.body.email
        })
        .exec()
        .then(user => {
            user.length >= 1 ? response(res, 409, false, "Mail exists") : next()
        })
        .catch(err => {
            response(res, 500, false, "error", err)
        });
}
