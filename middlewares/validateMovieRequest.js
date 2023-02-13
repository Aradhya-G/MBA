const releaseStatusValues = require("../utils/constants").releaseStatus;

const validateMovieRequest = async (req, res, next) => {
    if (!req.body.name) {
        return res.status(400).send({ message: "Failed !Movie name not provided" })
    }

    if (!req.body.releaseStatus) {
        return res.status(400).send({ message: "Failed !Movie release status not provided" })
    }

    const releaseStatus = req.body.releaseStatus;

    const correctStatus = [releaseStatusValues.blocked, releaseStatusValues.released, releaseStatusValues.unreleased];

    if(!correctStatus.includes(releaseStatus)){
        return res.status(400).send({message:`Failed! Movie release status should be out of ${correctStatus}`});
    }
    
    next()
}

module.exports = {
    validateMovieRequest:validateMovieRequest
}