const express = require('express');
const router = express.Router();
const requestController = require('../controllers/requestController');

router.post('/requester', requestController.createRequest);
router.get('/admin', requestController.getRequests);
router.post('/approver', requestController.updateRequestStatus);

module.exports = router;
