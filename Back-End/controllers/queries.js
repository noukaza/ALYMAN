const User = require("../models/user");

const response = require("../configurations/responsesTempalte");


exports.searchUser = async (req, res, next) => {
    const name = req.params.q
    let users = await User.find({
            firstName: {
                $regex: '.*' + name + '.*'
            }
        })
        .select(" _id firstName lastName profileImage")
        .exec();
    response(res, 200, true, "successful operation", users)
}