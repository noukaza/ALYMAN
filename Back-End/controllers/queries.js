
const response = require("../configurations/responsesTempalte");


exports.searchUser = async (req, res, next) => {

    let users = ["nounou","amenare"]
    response(res, 200, true, "successful operation", users)
}