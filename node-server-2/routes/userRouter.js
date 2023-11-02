const express = require("express");
const userRoutes = express.Router({});  // options for router can be put in, like case sensetive
const userDataModel = require("../data-model/userDataModel");  // it will give access to mongoose queries

userRoutes.post("/api/signinupuser", (req, res) => {
    // read the user object sent in request body
    console.log("user ", req.body);
    let userToLogin = req.body;  // req.body is user in json format

    // if user name present in entire user data model - findOne is mongoose api
    // if match return the object, if not return null
    userDataModel.findOne({userName:req.body.userName}).then((existingUser) => {
        if (existingUser) {
            console.log("sigin in success ", existingUser);
            res.send(existingUser);
        }
        else {  // user is not present go for user creation

            // use schema to create new user object
            let newUser = new userDataModel(userToLogin)  // req.body

            // save is mongoose api - save to database
            newUser.save().then((newUser) => {  // will get _id once document is created
                console.log("successful signup ", newUser);
                res.send(newUser);
            }).catch((err1)=>{
                console.log("err signup", err1);
                res.send("error while sign up");
            })
        }
    }).catch((err) => {  // if there is error while doing findOne
        console.log("err whiled login ", err);
        res.send("Error while Login - existing user");
    })
})

userRoutes.get("/api/getAllUsers", (req, res) => {
    userDataModel.find()
    .then((allusers) => {
        res.send(allusers);
    })
    .catch(() => {
        res.send("error while fetching users");
    })
})

module.exports = userRoutes;
