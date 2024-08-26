const adminService = require("../services/adminService");

async function getRequests(req, res) {
    try {
        const request = req.body;
        const requests = await adminService.getRequests(request);
        res.status(200).send({ requests });
    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = { getRequests };