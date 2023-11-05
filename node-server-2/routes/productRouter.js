const express = require("express");
const productRoutes = express.Router({});  // options for router can be put in, like case sensetive
const productDataModel = require("../data-model/productDataModel");  // it will give access to mongoose queries

productRoutes.post("/api/saveproduct", (req, res) => {
    //read the product object sent in request body
    console.log("product", req.body);
    let productToSave = req.body;  // req.body is product in json format

    // Following commented codes creates new product whether it already exists or not
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

    // if product name present in entire product data model - findOne is mongoose api where it returns the data object if match and return null if no match
    productDataModel.findOne({name:req.body.name}).then((productFoundOnDB) => {
        if (productFoundOnDB) {
            let avgRating = (productFoundOnDB.sum + Number(req.body.rating)) / (productFoundOnDB.numReviews + 1);  // req.body.rating read as string and not number unless parse to Number
            productFoundOnDB.rating = avgRating;
            productFoundOnDB.reviews.unshift(req.body.reviews);  // add on head
            productFoundOnDB.numReviews++;
            productFoundOnDB.sum += Number(req.body.rating);

            productFoundOnDB.save().then((productUpdated) => {
                console.log("existing product updated on DB", productUpdated);
                res.send(productUpdated);
            }).catch((err)=>{
                console.log("Error: Order found but could not cancel on DB");
                res.send("Error: Order found but could not cancel on DB");
            })
        }
        else {  // if product does not exist, create new product

            // use schema to create new product object
            let newProduct = new productDataModel(productToSave)  // req.body

            // save is mongoose api - save to database
            newProduct.save().then((newProduct) => {  // will get _id once document is created
                console.log("new product saved on DB", newProduct);
                res.send(newProduct);
            }).catch((err1) => {
                console.log("err on new product save", err1);
                res.send("err on new product save");
            })
        }
    }).catch((err) => {  // if there is error while doing findOne
        console.log("err on existing product update", err);
        res.send("err on existing product update");
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
