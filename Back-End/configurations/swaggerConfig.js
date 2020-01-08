const gitVersion = require('git-tag-version');
const versionGit = gitVersion().split("-")[0];

module.exports = {
    swaggerDefinition: {
        info: {
            title: "LYMAN",
            description: "instagrame ",
            contact: {
                email: "apiteam@lyman.com"
            },
            version: versionGit,
        },
        host:  process.env.SWAGGER_BASE_URL + ":" + process.env.PORT,
        basePath: "/",
        schemes: ["http", "https"]
    },
    apis: ["./routes/*.js", "./configurations/*.js"]
}