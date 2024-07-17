const requestModel = require('../models/request');

async function createRequest(request) {
    return await requestModel.createRequest(request);
}

async function getRequests(request) {
    return await requestModel.getRequests(request);
}

async function updateRequestStatus(request) {
    return await requestModel.updateRequestStatus(request);
}

module.exports = {
    createRequest,
    getRequests,
    updateRequestStatus
};
