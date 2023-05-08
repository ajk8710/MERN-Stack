const express = require("express");
const adminRoutes = express.Router({caseSensitive:true});  // options for router, like case sensetive

adminRoutes.get('/Hello', (req, res) => {
    res.send("I am Hello from express admin route");
})

adminRoutes.get('/', (req, res) => {
    res.send("I am default route from adim route");
})

module.exports = adminRoutes;
