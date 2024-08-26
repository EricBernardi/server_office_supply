const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use(router);

module.exports = {
    app,
    router,
};
