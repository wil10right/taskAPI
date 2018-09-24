const express = require('express');
const app = express();
const trans = require('./server/routes');
const bp = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

// app.use(bp.json());

app.use(express.static( __dirname + '/public/dist/public' ));

trans(app);

app.listen(8000, function(){
    console.log('listening on port 8000 ************************');
});