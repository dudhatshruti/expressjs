const User = require('../model/user.model');
// const User = require('../public/user.json');

// exports.getAllUser = (req,res)=>{
//     res.json(User);
// }

exports.addUser =async (req,res)=>{
    try{
        let {id,firstName,lastName,age,gender,height,number,phone} = req.body;

        let user = await User.findOne({firstName:firstName});
        if (user) {
            return res.json({message:"user is already exists..."});
        }

        user = await User.create({
            id,firstName,lastName,age,height,gender,number,phone
        });
        user.save();
        res.json({message:'user is added',user});
    }
    
    catch(err){
        console.log(err);
        res.status(500).json({message:"internal server error..."});
    }
}

exports.getAllUser = async(req,res)=>{
    try{
        let user = await User.find();
        res.json(user);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:'internal server error...'});
    }
}

exports.getUser = async (req, res)=>{
    try{
        let id = req.params.id;
        let user = await User.findById(id);
        res.json(user);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:'internal server error...'});
    }
}

exports.updateUser = async(req, res)=>{
    try{
        let id = req.params.id;
        let user = await User.findById(id);
        if (!user) {
            return res.json({message:"user not found"});
        }
        user = await User.findOneAndUpdate(
            {_id : id},
            {
                $set:{...req.body}
            },
            {
                new: true
            }
        )
        user.save();
        res.json({user,message:'user is update...'});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"internal server error..."})
    }
}

exports.deleteUser= async(req,res)=>{
    try{
    let id = req.params.id;
    let user = await User.findById(id);
    if (!user) {
        return res.json({message:"user not found"});
    }
    user = await User.findByIdAndUpdate(user._id,{isDelete:true},{new:true})
    res.json({message:'user is deleted'});
}
catch(err)
    {
    console.log(err)
    res.status(500).json({message:'internal server error'})
    }
}
