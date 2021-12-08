require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require("./src/routes")
const app = express();
const port = process.env.APP_PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use("/api/v1", routes)

app.listen(port, () => console.log('Server running on port', port));
