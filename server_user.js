const express = require('express');
const server = express();
// const path = require('path');
const port = 9090;
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');
// let morgan = require('morgan');

server.use(morgan('dev'));
server.use(express.json());
server.use('/user',userRoutes);

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shruti_node');
}
main().then(()=>{
    console.log('DB is connected...');
}).catch((err)=>{
    console.log(err);
})
server.listen(port,()=>{
    console.log(`started server at port ${port}`);
})
