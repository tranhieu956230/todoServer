const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const cors = require('cors');
var app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://hieu:hieu@ds149221.mlab.com:49221/tododb');
app.use(cors());
app.use(bodyParser.json());
app.use(routes);


app.listen(process.env.PORT || 4000,function(){
    console.log("now listening to port 4000");
})