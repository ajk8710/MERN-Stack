const express = require("express");
const productRoutes = express.Router({});  // options for router can be put in, like case sensetive
const productDataModel = require("../data-model/productDataModel");  // it will give access to mongoose queries

productRoutes.post("/api/saveproduct", (req, res) => {
    //read the product object sent in request body
    console.log("product", req.body);
    let productToSave = req.body;  // req.body is product in json format

    // use schema to create new product object
    // let newProduct = new productDataModel(productToSave)  // req.body

    // save is mongoose api - save to database
    // newProduct.save().then((newProduct) => {  // will get _id once document is created
    //     console.log("successful updating product", newProduct);
    //     res.send(newProduct);
    // }).catch((err1)=>{
    //     console.log("err updating product", err1);
    //     res.send("error while updating product");
    // })

    // if product name present in entire product data model - findOne is mongoose api
    // if match return the object, if not return null
    productDataModel.findOne({name:req.body.name}).then((existingProduct) => {
        if (existingProduct) {
            console.log("saving success", existingProduct);
            res.send(existingProduct);
        }
        else {  // product is not present go for product creation

            // use schema to create new product object
            let newProduct = new productDataModel(productToSave)  // req.body

            // save is mongoose api - save to database
            newProduct.save().then((newProduct) => {  // will get _id once document is created
                console.log("successful saving", newProduct);
                res.send(newProduct);
            }).catch((err1)=>{
                console.log("err saving", err1);
                res.send("error while saving");
            })
        }
    }).catch((err) => {  // if there is error while doing findOne
        console.log("err whiled saving ", err);
        res.send("Error while saving - existing product");
    })
})

productRoutes.get("/api/getproduct", (req, res) => {
    productDataModel.find()
    .then((allProducts) => {
        res.send(allProducts);
    })
    .catch(() => {
        res.send("error while fetching product");
    })
})

module.exports = productRoutes;
