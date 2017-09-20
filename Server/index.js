// import modules
var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();

const route =require('./routes/route');
const todo =require('./routes/todo');

//region server code
// port number
const port  = 3200;
// listen 
app.listen(port,()=>{
console.log("server started at port: "+port);
});

//endregion

//adding middel ware
app.use(cors());
app.use(bodyparser.json());

// static files
app.use(express.static(path.join(__dirname,'public')));
// user routes
app.use('/api', route);
app.use('/api', todo);

// db connection
mongoose.connect('mongodb://localhost:27017/contactlist');
// on connection
mongoose.connection.on('connected',()=>{
    console.log('connected to mongo db @ 27017');
});
// error in db connection
mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('error in connection to mongo db @ 27017');
    }
});

// testing server
// app.get('/',(req, res)=>{
// res.send("get method");
// });
