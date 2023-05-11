// REST is to have modules to handle all below requirements:
// Module to handle http request (http)
// Capable of handling http methods - get, post, put, patch, delete (header)
// Creating sessions, local storage, cookies, cache (cookies)
// Upload and Download (multi-part)
// Handle different types of inputs (request data) - json, html, jpeg, xlsx, etc (body parser)

let http = require("http"); // part of node framework

let bodyParser = require("body") // not part of node framework, but we can get it explicitly from
                                 // npm (node package manager) - package manager repository (installed default with Node)
                                 // yarn - is also a package management tool (not installed default with Node)

// It is impossible to have these require statment in every file we write for server side development
// Instead we use package management tool (or dependency management tool)


// We need to initialize the directory with npm tool

// npm commands:
// npm init - initialize the repo in local
// - creates metadata as package.jason which contains info about the packages needed in the given app
// - also contains info about project like - name, version, dependencies, test, start point of app


// web-server - should be able to create services/endpoints
// express - already built in package for all the required modules
// - i.e. a npmjs package which does all the job of a web server

// Use npm to install/uninstall express as dependency in server:
// npm i <module/package/dependency name> or npm install
// npm u <module/package/dependency name> or npm uninstall

// If we don't put module name after npm i, it will by default install/uninstall all the dependencies mentioned in package.json

// package.json lists the dependencies
// package-lock.json lists the dependencies and their versions that is required by dependencies listed in package.json
// It is recommended to not manually edit package-lock.json


// npm start - start is reserved command that executes "start": "node filename" under package.json - "scripts": {}
// npm run <custom_command_name> - to run custom commands


// nodemon - node monitoring module
// install as dev dependency - to be used only in development environment, and should not go to production
// npm i nodemon -D
