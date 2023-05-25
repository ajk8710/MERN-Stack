const express = require("express");
const user2Routes = express.Router({});  // options for router can be put in, like case sensetive
const user2DataModel = require("../data-model/user2DataModel");  // it will give access to mongoose queries

user2Routes.post("/api/signinupuser2", (req, res) => {
    //read the user object sent in request body
    console.log("user2 ", req.body);
    let user2ToLogin = req.body;  // req.body is user in json format

    // if user name present in entire user data model - findOne is mongoose api
    // if match return the object, if not return null
    user2DataModel.findOne({userName:req.body.userName}).then((existingUser2) => {
        if (existingUser2) {
            console.log("sigin in success ", existingUser2);
            res.send(existingUser2);
        }
        else {  // user is not present go for user creation

            // use schema to create new user object
            let newUser2 = new user2DataModel(user2ToLogin)  // req.body

            // save is mongoose api - save to database
            newUser2.save().then((newUser2) => {  // will get _id once document is created
                console.log("successful signup ", newUser2);
                res.send(newUser2);
            }).catch((err1)=>{
                console.log("err signup", err1);
                res.send("error while sign up");
            })
        }
    }).catch((err) => {  // if there is error while doing findOne
        console.log("err whiled login ", err);
        res.send("Error while Login - existing user2");
    })
})

user2Routes.get("/api/getuser2", (req, res) => {
    user2DataModel.find()
    .then((allusers) => {
        res.send(allusers);
    })
    .catch(() => {
        res.send("error while fetching user2");
    })
})

module.exports = user2Routes;
