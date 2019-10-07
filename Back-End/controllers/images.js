
exports.get_all_images = (req, res, next) => {
    res.status(200).json({
        message: "hi"
    })
};

exports.create_image = (req, res, next) => {
    const image = {
        id_image: req.body.id_image,
        id_user: req.body.id_user,
        url: req.body.url,
        description: req.body.description,
        create_at: req.body.create_at,
        update_at: req.body.update_at
    };
    res.status(201).json(image)
}

exports.delete_image = (req, res, next) => {
    const image = {
        id_image: req.params.id
    };

    res.status(202).json(image)
}

exports.update_image = (req, res, next) => {
    const image = {
        id_image: req.params.id,
        description: req.body.description
    };
    res.status(201).json(image)
}