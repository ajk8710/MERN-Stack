const express = require('express')
const app = express()  // app is an instance of an express application

// if someone gets to root path (/), send response 'Hello World'
app.get('/', function (req, res) {  // req and res are conventional naming
  res.send('Hello World')
})

app.listen(9000)  // localhost:9000/

console.log("Express is listening at localhost:9000");