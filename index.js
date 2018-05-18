const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const cors = require('cors');
const socket = require('socket.io');
var app = express();
const mongoose = require('mongoose');

//
mongoose.connect('mongodb://hieu:hieu@ds149221.mlab.com:49221/tododb');

app.use(cors());
app.use(bodyParser.json());
app.use(routes);
//error handling middleware
app.use(function(err,req,res,next){
      res.status(404).send({status:false,error: err.message})
})

const server = app.listen(process.env.PORT || 4000,function(){
    console.log("listening for request on port 4000");
})

const io = socket(server);

io.on('connection',function(client){
     client.on('change',() => {
        io.sockets.emit('handleChange');
     })
})