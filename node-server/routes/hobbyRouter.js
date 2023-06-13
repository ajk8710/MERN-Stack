const express = require("express");
const hobbyRoutes = express.Router({});  // options for router can be put in, like case sensetive
const hobbyDataModel = require("../data-model/hobbyDataModel");  // it will give access to mongoose queries

hobbyRoutes.post("/api/savehobby", (req, res) => {
    // req.body is hobby in json format - {hobbyName: hobbyName}
    console.log("Hobby to Save - req.body:", req.body);
    
    // findOne is mongoose api: if match return the object, if not return null
    hobbyDataModel.findOne({hobbyName:req.body.hobbyName}).then((existingHobby) => {
        if (existingHobby) {  // if already exists, don't do anyting
            console.log("Hobby already exists", existingHobby);
            res.send(existingHobby);
        }
        else {  // create hobby if not exists
            // use schema to create new hobby object
            let newHobby = new hobbyDataModel(req.body)

            // save is mongoose api - save to database
            newHobby.save().then((newHobby) => {
                console.log("successful saving new hobby", newHobby);
                res.send(newHobby);
            }).catch((err)=>{
                res.send("error while saving new hobby", err);
            })
        }
    }).catch((err) => {  // if there is error while doing findOne
        res.send("Error while finding hobby exists", err);
    })
})

hobbyRoutes.get("/api/gethobbylist", (req, res) => {
    hobbyDataModel.find()
    .then((allHobbies) => {
        res.send(allHobbies);
    })
    .catch(() => {
        res.send("error while fetching hobbies");
    })
})

module.exports = hobbyRoutes;
