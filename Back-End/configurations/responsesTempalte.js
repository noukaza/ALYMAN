module.exports = (res, status, success, message, data = null) => {
    let tmp = data === null ? [] : data;
    data = {
        success: success,
        message: message,
        data: tmp
    }

    return res.status(status).json(data)
}