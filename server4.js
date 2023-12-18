const express = require('express');
const server = express();
const port = 3020;
const path = require('path');
const morgan = require('morgan');
const product = require('./public/products.json');

server.use(morgan('dev'));
server.use(express.json());

//   C R U D 

//  creat product -> /products

server.post('/products',(req,res)=>{
    product.push(req.body);
    res.json({message:'product is added.',product});
})

// all products ->/product
server.get('/products',(req,res)=>{
    res.status(201).json(product);
})

//  specific product ->/product/:id

server.get('/product/:id',(req,res)=>{
    const id = Number(req.params.id);
    const item = product.find((p)=>p.id === id)
    console.log(item);
    res.status(200).json(item);
})

// REPLACE PRODUCT -> /products/:id
server.put('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const itemIndex = product.findIndex((p)=>p.id ===id);
    product.splice(itemIndex,1,{...req.body,id:id})
    console.log(itemIndex);
    res.status(200).json({message:'replace'});
})

// UPDATE PRODUCT ->//products/:id

server.patch('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const itemIndex = product.findIndex((p)=>p.id ===id);
    let item = product[itemIndex];
    console.log(item);
    item =  product.splice(itemIndex,1,{...item,...req.body})
    res.status(200).json({message:'update',product:item});
})

server.delete('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const itemIndex = product.findIndex((p)=>p.id ===id);
    let item = product[itemIndex];
    console.log(item);
    item =  product.splice(itemIndex,1)
    res.status(200).json({message:'delete',product:item});
})

server.listen(port,()=>{
    console.log(`started..${port}`);
})

