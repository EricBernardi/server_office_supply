const requestService = require('../services/requestService');

async function createRequest(req, res) {
    try {
        const request = req.body;
        const result = await requestService.createRequest(request);
        res.status(200).send({ result });
    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = { createRequest };
