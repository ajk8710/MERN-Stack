const express = require("express");
const cartRoutes = express.Router({});  // options for router can be put in, like case sensetive
const cartDataModel = require("../data-model/cartDataModel");  // it will give access to mongoose queries

cartRoutes.post("/api/savecart", (req, res) => {
    //read the cart object sent in request body
    console.log("cart to save:", req.body);
    let cartToSave = req.body;  // req.body is cart in json format

//     // use schema to create cart object
//     let cart = new cartDataModel(cartToSave)  // req.body

//     // save is mongoose api - save to database
//     cart.save().then((cart) => {  // will get _id once document is created
//         console.log("successful saving cart", cart);
//         res.send(cart);
//     }).catch((err1)=>{
//         console.log("err saving cart", err1);
//         res.send("error while saving cart");
//     })
// })

    cartDataModel.findOneAndRemove({username:req.body.username}).then((removedCart) => {
        if (removedCart) {
            console.log("removed cart to update");
        }
        // else {  // cart is not present go for cart creation

            // use schema to create cart object
            let cart = new cartDataModel(cartToSave)  // req.body

            // save is mongoose api - save to database
            cart.save().then((cart) => {  // will get _id once document is created
                console.log("successful saving cart", cart);
                res.send(cart);
            }).catch((err1)=>{
                console.log("err saving cart", err1);
                res.send("error while saving cart");
            })
        // }
    }).catch((err) => {  // if there is error while doing findOne
        console.log("err whiled saving ", err);
        res.send("Error while saving - existing cart");
    })
})

cartRoutes.get("/api/getcart", (req, res) => {
    cartDataModel.findOne({username:req.body.username})
    .then((myCart) => {
        res.send(myCart);
    })
    .catch(() => {
        res.send("error while fetching carts");
    })
})

module.exports = cartRoutes;
