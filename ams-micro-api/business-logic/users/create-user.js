const User = require("../../persistent-models/users");
const logger = require("../../shared/logger/winston-logger");

const createUser = async (req, res) => {
    const userData = new User(req.body)

    try {
        await userData.save();
        logger.debug(`new user ${userData.firstName} sign-up succesfully`);
    } catch (err) {
        logger.error(err);
        res.status(err.status || 500).json({status:err.status,message:"server internal error while creating new user"})
    }

    res.status(201).json({status:201,message:"user created successfully"})
}

module.exports = createUser