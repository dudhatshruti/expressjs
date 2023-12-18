// const product = require('../public/products.json');
const Product = require('../model/product.model');

// exports.addNewProduct = (req,res)=>{
//     product.push(req.body);
//     res.json({message:'product is added.',product});
// }

// exports.getAllProduct =(req,res)=>{
//     res.status(201).json(product);
// }

// exports.specificProduct = (req,res)=>{
//     const id = Number(req.params.id);
//     const item = product.find((p)=>p.id === id)
//     console.log(item);
//     res.status(200).json(item);
// }

// exports.replaceProduct =(req,res)=>{
//     const id = +req.params.id;
//     const itemIndex = product.findIndex((p)=>p.id ===id);
//     product.splice(itemIndex,1,{...req.body,id:id})
//     console.log(itemIndex);
//     res.status(200).json({message:'replace'});
// }

// exports.updateProduct = (req,res)=>{
//     const id = +req.params.id;
//     const itemIndex = product.findIndex((p)=>p.id ===id);
//     let item = product[itemIndex];
//     console.log(item);
//     item =  product.splice(itemIndex,1,{...item,...req.body})
//     res.status(200).json({message:'update',product:item});
// }

// exports.deleteProduct = (req,res)=>{
//     const id = +req.params.id;
//     const itemIndex = product.findIndex((p)=>p.id ===id);
//     let item = product[itemIndex];
//     console.log(item);
//     item =  product.splice(itemIndex,1)
//     res.status(200).json({message:'delete',product:item});
// }

// ====>

exports.addNewProduct = async (req,res)=>{
    try{
        let {title,description,price,category,brand}= req.body;
        let product = await Product.findOne({title:title})
        if (product) {
            return res.json({message:'product is already exist... '})
        }
        product = await Product.create(
            {title,description,price,category,brand});
        product.save();
        res.json({message:'product is added.',product})}
     catch(err){
        console.log(err);
        res.status(500).json({message:"internal server error..."});
    }
}

exports.getAllProduct = async( req, res)=>{
    try{
        let products = await Product.find({isDelete:false});
        res.json(products);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"internal server error..."})
    }
}

exports.getProduct =async (req,res)=>{
    try{
        let id = req.params.id;
        let product = await Product.findById(id);
        res.json(product);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"internal server error..."});
    }
}

exports.updateProduct = async (req, res)=>{
    try{
        let id = req.params.id;
        let product = await Product.findById(id);
        if(!product){
            return res.json({message:"product not found..."})
        }
        product = await Product.findOneAndUpdate(
            {_id : id},
            {
                $set:{...req.body}
            },
            {
                new:true
            }
        )
        product.save();
        res.json({product,message:"product is update..."});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"internal server error..."})
    }
}

// exports.deleteProduct =async (req, res)=>{
//     try{
//         let id = req.params.id;
//         let product = await Product.findById(id);
//         if(!product){
//             return res.json({message:"product not found..."})
//         }
//         product = await Product.findOneAndDelete({_id:id});
//         res.json({product,message:"product is deleted..."})
//     }
    
//     catch(err){
//         console.log(err);
//         res.status(500).json({message:"internal server error..."});
//     }
// }


exports.deleteProduct=async (req,res)=>
{
    try
    {
        let id =req.params.id;
        let product=await Product.findById(id);
        if(!product){
            return res.json({message:'product not found'});
        }
        product=await Product.findByIdAndUpdate(
           product._id,{isDelete:true},{new:true}
        )
       
        res.json({message:'product is deleted'});
    }
    catch(err)
    {
    console.log(err)
    res.status(500).json({message:'internal server error'})
    }

};