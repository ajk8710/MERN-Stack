const express = require('express')
const app = express()  // app is an instance of an express application

// To localhost:9000 and localhost:9092 can interchange data
const cors = require('cors');  // importing for setting cross origin request headers to true
app.use(cors());  // adding cors as middleware to top level of API so that cors is set to true on all endpoint

// json middle-ware for setting request content type to json in req.body
app.use(express.json({limit:'2mb', extended:false}));

// if someone gets to root path (/), send response 'Hello World'
app.get('/', function (req, res) {  // req and res are conventional naming
  res.send('Hello World')
})

// userRouter
const userApp = express();
const userRouter = require("./routes/userRouter");

app.use('/user', userApp);  // use userApp for all url with /user
userApp.use('/', userRouter);  // its job is defined in userRouter // localhost:9000/user/api/signinupuser

app.listen(9000)  // localhost:9000/

console.log("Express is listening at localhost:9000");