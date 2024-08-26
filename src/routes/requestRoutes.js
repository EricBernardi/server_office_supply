const { router } = require('../config/server');
const { createRequest } = require('../controllers/requestController');
const requestRoutes = router;

requestRoutes.post('/create', createRequest);

module.exports = { requestRoutes };
