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

async function getRequests(req, res) {
    try {
        const request = req.body;
        const requests = await requestService.getRequests(request);
        res.status(200).send({ requests });
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function updateRequestStatus(req, res) {
    try {
        const { id, status, observations } = req.body;
        const result = await requestService.updateRequestStatus({ id, status, observations });
        res.status(200).send({ result });
    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = {
    createRequest,
    getRequests,
    updateRequestStatus
};
