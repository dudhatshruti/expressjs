const express = require('express');
const app = express();
const port = 1000;
const path = require('path');
const morgan = require('morgan');

app.use(express.static('public'));
app.use(morgan('dev'));
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

app.use((req,res,next)=>{
    console.log(req.query);
        if (req.query.password =='123') {
            next();
        }
        else
        res.sendStatus(401);
})

app.get('/',(req,res)=>{
    res.json({type:'get 1 method'});
})

app.get('/',(req,res)=>{
    res.json({type:'get 2 method'});
})

app.post('/',(req,res)=>{
    res.json({type:'post method'});
})

app.put('/',(req,res)=>{
    res.json({type:'put method'});
})

// app.patch('/',(req,res)=>{
//     res.json({type:'patch method'});
// })

// app.delete('/',(req,res)=>{
//     res.json({type:'delete method'});
// })


app.listen(port,()=>{
    console.log(`server start at port${port}.`);
})