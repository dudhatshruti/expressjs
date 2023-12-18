const express = require('express');
const server = express();
const port = 3010;
// const path = require('path');
const morgan = require('morgan');
// const product = require('./public/products.json');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product.routes');
// const userRoutes = require('./routes/user.routes');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shruti_node');
}
main().then(()=>{
    console.log('DB is connected...');
}).catch((err)=>{
    console.log(err);
})

server.use(morgan('dev'));
server.use(express.json());

server.use('/product',productRoutes);
// server.use('/user',userRoutes);


server.listen(port,()=>{
    console.log(`started..${port}`);
})

