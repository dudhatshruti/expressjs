const express = require('express');
const server = express();
const port = 3010;
const fs = require('fs');
const path = require('path');
const product = require('./products.json');
const person={
    "name":"skill",
    "introduction":"decode your skill"
}

server.get('/',(req, res)=>{
    res.send('Hello Wolrd');
})

server.get('/demo',(req, res)=>{
    res.send('demo content')
})

server.get('/taj',(req, res)=>{
    res.sendFile(path.join(__dirname,'./index.html'))
});

server.get('/product',(req, res)=>{
    res.send(product)
})

server.get('/person',(req, res)=>{
    res.send(person)
})


server.listen(port,()=>{
    console.log(`server start at: https://localhost:${port} .`);
})