// Use mongoose to make connection to mongodb
// Get schema object created and also develop data model to be used in api
// Set validations (restrictions) and data types in schema
// Although mongodb is schema-less, mongoose can create schema to start with
let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema;  // using the schema class from mongoose

// Creates db with name app2db or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/app2db"); 

let userSchema = new schemaObj({
    userName: {type: String, required : true},
    password: {type: String, required: true},
    street: String,
    mobile: Number
},{
    // When there is update on database,
    // it saves data with version key, so it knows which data is from which version of update
    versionKey: false  // By default, it's true
}
);

let UserModel = mongooseObj.model("user", userSchema);  // user - collection name (table name), pluralised by mongodb

module.exports = UserModel;  // this should be used in userRouter to build user api's
