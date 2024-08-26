const requestModel = require('../models/request');

async function createRequest(request) {
    return await requestModel.createRequest(request);
}

module.exports = { createRequest };
