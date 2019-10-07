exports.get_like_by_id = (req, res, next) => {
    const id = req.params.id
    res.json({
        id: id
    })
}

exports.poste_like = (req, res, next) => {
    const like = {
        _id: req.body.id_like,
        id_image: req.body.id_image,
        id_user: req.body.id_user,
        create_at: req.body.create_at

    };
    res.status(201).json(like)
}

exports.delete_like =  (req, res, next) => {
    const id = req.params.id

    res.status(202).json(id)
}