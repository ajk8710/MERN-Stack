const express = require("express");
const cartRoutes = express.Router({});  // options for router can be put in, like case sensetive
const cartDataModel = require("../data-model/cartDataModel");  // it will give access to mongoose queries

cartRoutes.post("/api/savecart", (req, res) => {
    //read the cart object sent in request body
    console.log("cart to save - req.body:", req.body);

    cartDataModel.findOne({userid: req.body.userid}).then((cartFoundFromDB) => {
        if (!cartFoundFromDB) {  // if cart not found, create new cart on DB
            // use schema to create cart object
            let newCart = new cartDataModel(req.body)

            // save new cart (save is mongoose api - save to database)
            newCart.save().then((savedCart) => {  // will get _id once document is created
                console.log("successful saving new cart", savedCart);
                res.send(savedCart);
            }).catch((err)=>{
                res.send("error while saving new cart", err);
            })
        }
        else {  // if cart found, replace cart items. Leave userid and username as it's the same.
            cartFoundFromDB.cartList = req.body.cartList;

            cartFoundFromDB.save().then((savedCart) => {  // will get _id once document is created
                console.log("successful updating existing cart", cartFoundFromDB);
                res.send(savedCart);
            }).catch((err)=>{
                console.log("error while updating existing cart", cartFoundFromDB);
                res.send("error while updating existing cart");
            })
        }
    }).catch((err) => {  // if there is error while doing findOne
        console.log("error while fetching cart on DB", err);
        res.send("error while fetching cart on DB");
    })
})

cartRoutes.post("/api/getcart", (req, res) => {
    cartDataModel.findOne({userid: req.body.userid})
    .then((userCart) => {
        res.send(userCart);
    })
    .catch(() => {
        res.send("error while fetching cart on DB");
    })
})

module.exports = cartRoutes;
