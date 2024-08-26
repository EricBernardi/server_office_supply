const { router } = require('../config/server');
const { getRequests } = require('../controllers/adminController');
const adminRoutes = router;

adminRoutes.get('/get', getRequests);

module.exports = { adminRoutes };