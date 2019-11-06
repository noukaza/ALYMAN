const response = require("../configurations/responsesTempalte");
const User = require("../models/user");

exports.UserExists = (req, res, next) => {
    // TODO : je ne vois pas l'intérêt de faire ça !! 0_o
    User.find({
            _id: id
        })
        .exec()
        .then(user => {
            user.length >= 1 ? next() : response(res, 409, false, "l'utilisateur n'existe pas", err); // TODO : changer le message   
        })
        .catch(err => {
            response(res, 500, false, "error", err) // TODO : changer le message 
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
