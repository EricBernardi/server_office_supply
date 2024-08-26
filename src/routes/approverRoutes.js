const { router } = require('../config/server');
const { updateRequestStatus } = require('../controllers/approverController');
const approverRoutes = router;

approverRoutes.post('/update', updateRequestStatus);

module.exports = { approverRoutes };