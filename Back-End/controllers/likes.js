const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Like = require("../models/like");
const Image = require("../models/image");
const response = require("../configurations/responsesTempalte");

exports.get_like_by_id = (req, res, next) => {
    Like
        .find()
        .select("_id user create_at update_at")
        //.populate("images")
        .exec()
        .then(data => {
            response(res, 200, true, "successful operation", data) // TODO : changer le msg "successful operation" par un msg qui décrit le resultat il sera probablement afficher en FRONT
        }).catch(err => {
            response(res, 404, false, "error", err)
        })
}

exports.poste_like = (req, res, next) => {
    
    Image.find({
            _id: req.body.image
        })
        .exec()
        .then(img => {
            if (img.length >= 1) {
                const like = new Like({
                    _id: mongoose.Types.ObjectId(),
                    user: req.userData._id,
                    image: req.body.image,
                   // create_at: req.body.create_at, // TODO : c pas a l'utilisateur de faire ca 
                   // update_at: req.body.update_at // TODO : c pas a l'utilisateur de faire ca 
                })
                like
                    .save()
                    .then(data => {
                        response(res, 201, true, "successful operation", data) // TODO : changer le msg "successful operation"
                    })
                    .catch(err => {
                        response(res, 500, false, "error", err)
                    })
            } else {
                response(res, 409, false, "l'image n'existe pas", err) // TODO : changer le msg "l'image n'existe pas" => par une phrase du genre vous avez essayé de liker une images qui n'existe pas ... etc 
            }
        })
        .catch(err => {
            response(res, 500, false, "error", err) // TODO : changer le message 
        });

}

exports.delete_like = (req, res, next) => {
    id = req.userData._id;
    /**
     * TODO : redondance => avoir des middleware 
     */
    Like
        .findById({
            _id: req.params.id
        })
        .exec()
        .then(data => {
            if (data.user == id) {
                Like.remove({
                        _id: req.params.id
                    })
                    .exec()
                    .then(result => {
                        response(res, 200, true, "Like supprimer ") // TODO : changer le message 
                    })
                    .catch(err => {
                        response(res, 500, false, "error", err) // TODO : changer le message 
                        // TODO : pas besoin d envoyer les err en paramètres elles peuvent contenire des infos sensible. si besoin c a nous de sérialiser les donnees a envoyer  
                    })
            } else {
                response(res, 409, false, "Like n'appartien pas a l'utilisateur", err) // TODO : changer le message 
                // TODO : pas besoin d envoyer les err; si besoin c a nous de sérialiser les donnees a envoyer
            }
        }).catch(err => {
            response(res, 500, false, "error", err) // TODO : changer le message 
            // TODO : pas besoin d envoyer les err .si besoin c a nous de sérialiser les donnees a envoyer 
        });
}