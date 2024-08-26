const { app } = require('./src/config/server');
const request = require('./src/routes/requestRoutes');
const approver = require('./src/routes/approverRoutes');
const admin = require('./src/routes/adminRoutes');

app.use('/requester', request.requestRoutes);
app.use('/approver', approver.approverRoutes);
app.use('/admin', admin.adminRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
