const express = require("express");
const trainerRoutes = express.Router({});  // options for router can be put in, like case sensetive
const trainerDataModel = require("../data-model/trainerDataModel");  // it will give access to mongoose queries

trainerRoutes.post("/api/signinuptrainer", (req, res) => {
    //read the Trainer object sent in request body
    console.log("trainer", req.body);
    let trainerToLogin = req.body;  // req.body is trainer in json format

    // if Trainer name present in entire Trainer data model - findOne is mongoose api
    // if match return the object, if not return null
    trainerDataModel.findOne({name:req.body.name}).then((existingTrainer) => {
        if (existingTrainer) {
            console.log("sigin in success ", existingTrainer);
            res.send(existingTrainer);
        }
        else {  // Trainer is not present go for Trainer creation

            // use schema to create new Trainer object
            let newTrainer = new trainerDataModel(trainerToLogin)  // req.body

            // save is mongoose api - save to database
            newTrainer.save().then((newTrainer) => {  // will get _id once document is created
                console.log("successful signup ", newTrainer);
                res.send(newTrainer);
            }).catch((err1)=>{
                console.log("err signup", err1);
                res.send("error while sign up");
            })
        }
    }).catch((err) => {  // if there is error while doing findOne
        console.log("err whiled login ", err);
        res.send("Error while Login - existing trainer");
    })
})

trainerRoutes.get("/api/gettrainer", (req, res) => {
    trainerDataModel.find()
    .then((allTrainers) => {
        res.send(allTrainers);
    })
    .catch(() => {
        res.send("error while fetching trainers");
    })
})

module.exports = trainerRoutes;
