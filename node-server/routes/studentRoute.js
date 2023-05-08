const express = require("express");
const studentRoutes = express();

studentRoutes.get('/', (req, res) => {  // http://localhost:9000/studentinfo?name=pikachu&age=25
    let name = req.query['name'];  // req.query reads param passed in url
    let age = req.query['age'];
    if (name) {
        res.send(`Student information: ${name} ${age}`)
    }
    else {
        res.send("Student information not given");
    }
});

studentRoutes.get('/:id', (req, res) => {
    let routeParam = req.params['id'];  // req.param reads param passed in url
    if (routeParam) {
        res.send(`Student ID is ${routeParam}`);
    }
    else {
        res.send("No student id given")
    }
});

module.exports = studentRoutes;
