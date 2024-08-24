const express = require('express');
const bodyParser = require('body-parser');
const requestRoutes = require('./src/routes/requestRoutes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', requestRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
