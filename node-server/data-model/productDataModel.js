// Use mongoose to make connection to mongodb
// Get schema object created and also develop data model to be used in api
// Set validations (restrictions) and data types in schema
// Although mongodb is schema less but with mongoose we can create schema to start with
let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema;  // using the schema class from mongoose

// Creates db with name mernstack15 or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/mernstack15"); 

let productSchema = new schemaObj({
    name: {type: String, required : true},
    price: {type: Number, required: true},
    desc: String,
    rating: Number,
    qty: {type: Number, default:1}
},{
    // When there is update on database,
    // it saves data with version key, so it knows which data is from which version of update
    versionKey: false  // By default, it's true
}
);

let ProductModel = mongooseObj.model("product", productSchema);  // product - collection name (table name), pluralised by mongodb

module.exports = ProductModel;  // this should be used in productRouter to build product api's
