const passwordRegx = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
const response = require("../configurations/responsesTempalte");


exports.ValidPassword = (req, res, next) => {
    if(req.body.password){
        const password = req.body.password;
        if (password.length < 16 && password.length > 6){ //TODO find regx for password 
            next()
        }else{
            response(res,409,false,"Error invalid password! password must be between 6 and 16 characters long ") ;//TODO : chagne message
        }
    }else{
        next()
    }
    
}