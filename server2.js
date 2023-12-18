const express = require('express');
const app = express();
const port = 1010;
const path = require('path');

// app.use((req,res,next)=>{
//     console.log(req.query);
//         if (req.query.password =='123') {
//             next();
//         }
//         else
//         res.sendStatus(401);
// })


const auth = (req,res,next)=>{
    console.log(req.query);
    if (req.query.password =='123'){
        next();
    }
    else
    res.sendStatus(401);
}

// app.get('/',auth,(req,res)=>{
//     res.json({type:'get 1 method'});
// })

// app.get('/',(req,res)=>{
//     res.json({type:'get 2 method'});
// })

app.post('/',auth,(req,res)=>{
    res.json({type:'post method'});
})

app.put('/',auth,(req,res)=>{
    res.json({type:'put method'});
})

// app.patch('/',(req,res)=>{
//     res.json({type:'patch method'});
// })

// app.delete('/',(req,res)=>{
//     res.json({type:'delete method'});
// })

app.get('/ab+cd',(req,res)=>{
    res.send('abcd');
})

// app.get('/',(req,res)=>{
    // console.log(req.method,req.ip,req.get('user-request'));
    // res.json({type:"get method"});
    // res.sendStatus(401);
    // res.send('hello world');
    // res.sendFile(path.join(__dirname,'product.json'))

// })
app.listen(port,()=>{
    console.log(`server start at port${port}.`);
})