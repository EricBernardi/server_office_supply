const approverModel = require("../models/approver");

async function updateRequestStatus(request) {
    return await approverModel.updateRequestStatus(request);
}

module.exports = { updateRequestStatus };