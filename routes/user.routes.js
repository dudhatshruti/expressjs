const express = require('express');
const userRoutes = express.Router();
const{
    getAllUser,addUser,getUser,updateUser,deleteUser
} = require('../controller/user.controller');

userRoutes.get('/',getAllUser);
userRoutes.post('/',addUser);
userRoutes.get('/:id',getUser);
userRoutes.put('/:id',updateUser);
userRoutes.delete('/:id',deleteUser);



module.exports = userRoutes;