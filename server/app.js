const express = require('express');
const connectDB = require('./db/connect');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const accountRouter = require('./routes/account');

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
connectDB(process.env.MONGO_URI);

app.use('/', accountRouter);
app.listen(3000);
