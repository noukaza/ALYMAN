const passwordRegx = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
const response = require("../configurations/responsesTempalte");


exports.ValidPassword = (req, res, next) => {
    const password = req.body.password;
    if (password.length < 16 && password.length > 6){ //TODO find regx for password 
        next()
    }else{
        response(res,409,false,"error invalid password") ;//TODO : chagne message
    }

}