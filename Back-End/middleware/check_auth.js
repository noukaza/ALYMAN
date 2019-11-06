const jwt = require("jsonwebtoken");

const response = require("../configurations/responsesTempalte");
const User = require("../models/user");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded
        User.find({
            _id: decoded._id
        }).exec().then(data => {
            data.length !== 0 ? next() : response(res, 401, false, 'Auth failed ! you have no longer a account ');
        }).catch(err => {
            response(res, 401, false, 'Auth failed !', err);
        })
    } catch (e) {
        response(res, 401, false, 'Auth failed !');
    }
};