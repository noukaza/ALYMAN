exports.get_all_comments = (req, res, next) => {
    res.status(200).json({
        message: "hi"
    })
}

exports.post_comment = (req, res, next) => {
    const comment = {
        id_comment: req.body.id_comment,
        id_image: req.body.id_image,
        id_user: req.body.id_user,
        comment: req.body.comment,
        create_at: req.body.comment
    };
    res.status(201).json(comment)
}

exports.delete_comment = (req, res, next) => {
    const comment = {
        id_comment: req.params.id
    };
    res.status(202).json(comment)
}

exports.update_comment = (req, res, next) => {
    const comment = {
        id_comment: req.params.id,
        comment: req.body.comment
    };
    res.status(201).json(comment)
}