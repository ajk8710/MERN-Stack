const express = require("express");
const orderRoutes = express.Router({});  // options for router can be put in, like case sensetive
const orderDataModel = require("../data-model/orderDataModel");  // it will give access to mongoose queries

orderRoutes.post("/api/saveorder", (req, res) => {
    //read the order object sent in request body
    console.log("order to save - req.body:", req.body);

    // use schema to create order object
    let newOrder = new orderDataModel(req.body)

    // save new order (save is mongoose api - save to database)
    newOrder.save().then((savedOrder) => {  // will get _id once document is created
        console.log("successful saving new order", savedOrder);
        res.send(savedOrder);
    }).catch((err)=>{
        res.send("error while saving new order", err);
    })
})

orderRoutes.post("/api/getrecentorders", async function(req, res) {  // async is needed for await
    recentOrders = []
    const cursor = orderDataModel.find({userid: req.body.userid})
    for await (const doc of cursor) {
        recentOrders.push(doc);
    }
    // console.log("User's recent orders:", recentOrders);
    res.send(recentOrders);

    // Other Way: I can do find() - find orders for all users then filter at front end
    // orderDataModel.find()
    // .then((userOrder) => {
    //     res.send(userOrder);
    // })
    // .catch(() => {
    //     res.send("error while fetching order on DB");  // also for user without any recent order
    // })
})

module.exports = orderRoutes;
