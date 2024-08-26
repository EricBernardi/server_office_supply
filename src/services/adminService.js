const adminModel = require("../models/admin");


async function getRequests(request) {
    return await adminModel.getRequests(request);
};

module.exports = { getRequests };