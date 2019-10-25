const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.create_user = (req, res, next) => {
    User.find({
        email: req.body.email
    })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                res.status(409).json({
                    message: "Mail exists"
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        res.status(500).json({
                            error: "failed to creat user"
                        })
                    } else {
                        const user = new User({
                            _id: mongoose.Types.ObjectId(),
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            profileImage: req.file.path,
                            bio: req.body.bio,
                            email: req.body.email,
                            password: hash
                        })
                        user
                            .save()
                            .then(data => {
                                res.status(201).json(data)
                            })
                            .catch(err => {
                                res.status(500).json({
                                    error: err
                                })
                            })
                    }
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });


}

exports.delets_user = (req, res, next) => {
    User.remove({ _id: req.params.id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Done !"
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        })
}


exports.login_user = (req, res, next) => {
    User.find({ email: req.body.email }).exec()
        .then(user => {
            if (user.length < 1) {
                res.status(401).json({
                    message: 'Auth failed'
                })
            } else {
                bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                    if (err) {
                        res.status(401).json({
                            message: 'Auth failed'
                        })
                    }
                    if (result) {
                        const token = jwt.sign({
                            email: user[0].email,
                            _id: user[0]._id
                        },
                            process.env.JWT_KEY,
                            {
                                expiresIn: "1 days"
                            })
                        res.status(200).json({
                            message: 'Auth successful',
                            token: token
                        })
                    } else {
                        res.status(401).json({
                            message: 'Auth failed'
                        })
                    }

                })
            }

        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        })
}

exports.get_all_user = (req, res, next) => {
    User
        .find()
        .select("_id firstName lastName profileImage bio email")
        //.populate("images")
        .exec()
        .then(data => {
            res.status(200).json(data)
        }).catch(err => console.log(err))

}