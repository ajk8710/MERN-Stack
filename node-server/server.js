// Day 19 Material - setup node server and get methods

const express = require('express');
const app = express();  // app is an instance of an express application

// To localhost:9000 and localhost:9092 can interchange data
const cors = require('cors');  // importing for setting cross origin request headers to true
app.use(cors());  // adding cors as middleware to top level of API so that cors is set to true on all endpoint

// json middle-ware for setting request content type to json in req.body
app.use(express.json({limit:'2mb', extended:false}));

// console.log(__dirname);   // comeplete path to current directory
// console.log(__filename);  // complete path to current file

app.get('/', function(req, res) {
    res.send('Hello World from Express');  // send response to endpoint '/'
});

app.get('/user', (req, res) => {  // send response to endpoint '/user'
    // console.log(req.url);    // request that I'm sending to browser with GET method
    // console.log(req.query);  // request that I'm sending to browser with GET method
    res.json({name: "Jason"});
});

app.get('/html', function(req, res) {
    res.send("<h1>Application Running Through Nodemon</h1>");
});

// '*' to catch page not found error
// app.get('*', function (req, res) {
//     res.send('API you"re looking for is still in progress...')
// })

// Practice:
// Create an api with endpoint - getname and return your name and address
app.get('/getname', (req, res) => {
    res.send("Alex at United States");
});


// Day 20 Material - Query String, Route Param, Static Middleware and Routing

// Two ways to send the information in get method - Query String and Route Param
// Query String using '?'  Use '&' for more than one parameters
// http://localhost:9000/qstring?name=pikachu&age=25
app.get('/qstring', (req, res) => {
    let qs = req.query['name'];  // req.query reads param passed in url
    if (qs) {
        res.send(qs + " " + req.query['age']);  // req.query reads param passed in url
    }
    else {
        res.send("No query string passed");
    }
});

// Route Param using ':'
// http://localhost:9000/rparam/10001
app.get('/rparam/:id', (req, res) => {
    let routeParam = req.params['id'];  // req.param reads param passed in url
    if (routeParam) {
        res.send(`ID in route is ${routeParam}`);
    }
    else {
        res.send("No route param passed")
    }
});


// sedning static files using sendFile

// .all accepts any method - GET, POST, PUT, PATCH, DELETE
app.all('/info', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");  // sendFile sends a file
    // "./public/index.html" will thorugh error: "path must be absolute or specify root to res.sendFile"
});

// welcome url must be present to use welcome.js in index.html
app.get('/public/welcome', (req, res) => {
    res.sendFile(__dirname+"/public/welcome.js");
});

// but this creates chunk of codes in one file
// (10 get endpoints for 10 files, and more if there are image files)
// Since these are all static file (no calculations), use static middleware

// Use express.static to serve static files from the server
app.use('/static', express.static('public'));  // for all url starting with /static, serve from the public

// Now localhost:9000/static (and localhost:9000/static/index.html) is equal to localhost:9000/info
// (even without get methods explicitly defined)


// Routing:
// For example - different load for admin pages

// create a sub application - mounting, path mount
const admin = express();  // new admin application for admin requests
const adminRouter = require("./routes/adminRoute");

app.use('/admin', admin);  // for all url starting with /admin, sends it to admin app to handle

/*
admin.get('/', (req, res)=>{  // http://localhost:9000/admin
    res.send("Hello Admin System");
});
*/

// You can segregate functionality further by Router
admin.use('/', adminRouter);  // for all url, sends it to adminRouter to handle


// Practice:
// Create student static for static middle ware
// Read student info using query string and route param
// Create student router and app to serve request coming with studentinfo to serve
// Practice the things covered in session
app.use('/student', express.static('student'));

const student = express();
app.use('/studentinfo', student);

const studentRouter = require("./routes/studentRoute");
student.use('/', studentRouter)


// userRouter
const userApp = express();
const userRouter = require("./routes/userRouter");

app.use('/user', userApp);
userApp.use('/', userRouter);  // localhost:9000/user/api/signinupuser


// user2Router
const user2App = express();
const user2Router = require("./routes/user2Router");

app.use('/user', user2App);
user2App.use('/', user2Router);  // localhost:9000/user/api/signinupuser2


app.listen(9000);  // localhost:9000/

console.log("Express is listening at localhost:9000");
