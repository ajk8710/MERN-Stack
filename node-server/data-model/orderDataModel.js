// Use mongoose to make connection to mongodb
// Get schema object created and also develop data model to be used in api
// Set validations (restrictions) and data types in schema
// Although mongodb is schema less but with mongoose we can create schema to start with
let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema;  // using the schema class from mongoose

// Creates db with name mernstack15 or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/mernstack15"); 

let orderSchema = new schemaObj({
    userid: {type: String, required: true},
    username: {type: String, required: true},
    orderList: Object,
    orderDate: {type: Date, default: Date.now},
    canceled: {type: Boolean, default: false}
},{
    // When there is update on database,
    // it saves data with version key, so it knows which data is from which version of update
    versionKey: false  // By default, it's true
}
);

let OrderModel = mongooseObj.model("order", orderSchema);  // order - collection name (table name), pluralised by mongodb

module.exports = OrderModel;  // this should be used in orderRouter to build order api's
