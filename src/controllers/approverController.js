const approverService = require("../services/approverService");

async function updateRequestStatus(req, res) {
    try {
        const { id, status, observations } = req.body;
        const result = await approverService.updateRequestStatus({ id, status, observations });
        res.status(200).send({ result });
    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = { updateRequestStatus };