const express = require('express');
const mongoose = require('mongoose');
const email = require('./services/mailer');
const cors = require('cors');

const app = express();
mongoose.connect('mongodb://root:example@mongo:27017/');

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use(express.json());

const port = process.env.PORT || 4000;

app.use('/', email);

app.listen(port, () => {console.log('Started!')});