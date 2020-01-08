const User = require("../models/user");

const response = require("../configurations/responsesTempalte");


exports.searchUser = async (req, res, next) => {
    const name = req.params.q
    const lowName = name.toLowerCase();

    let users = await User.find({$or:[{
            firstName: {
                $regex: '.*' + name + '.*'
            }},
            {lastName: {
                $regex: '.*' + name + '.*'
            },
        },{
            firstName: {
                $regex: '.*' + lowName + '.*'
            }},
            {lastName: {
                $regex: '.*' + lowName + '.*'
            },
        }]
        })
        .select(" _id firstName lastName profileImage")
        .exec();
    response(res, 200, true, "successful operation", users)
}