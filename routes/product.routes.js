const express = require('express');
const productRoutes = express.Router();
const {
    addNewProduct,
    getAllProduct,
    // getProduct,
    // specificProduct,
    // replaceProduct,
    updateProduct,
    deleteProduct
} = require('../controller/product.controller');

// create product -> /products
productRoutes.post('/',addNewProduct);

// all products ->/product
productRoutes.get('/',getAllProduct);

// productRoutes.get('/:id',getProduct);

//  specific product ->/product/:id
// productRoutes.get('/:id',specificProduct)

// REPLACE PRODUCT -> /products/:id
// productRoutes.put('/:id',replaceProduct);

// UPDATE PRODUCT ->//products/:id

productRoutes.put('/:id',updateProduct);

// DELETE PRODUCT
productRoutes.delete('/:id',deleteProduct);

module.exports = productRoutes;