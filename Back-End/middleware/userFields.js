const passwordRegx = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
const response = require("../configurations/responsesTempalte");


exports.ValidPassword = (req, res, next) => {
    console.log("hi")
    const password = req.body.password;
    if (password.match(passwordRegx)){
        next()
    }else{
        response(res,500,false,"error invalid password") ;//TODO : chagne message
    }

}