/**
 * Created by prasadtajane on 8/5/17.
 */
var mongoose = require("mongoose");

var pageSchema = new mongoose.Schema({
    _website:String,
    name:String,
    title:String,
    description:String,
    dateCreated:{type:Date, default:Date.now()}
},  {
    collection:"page"
});

module.exports = pageSchema;