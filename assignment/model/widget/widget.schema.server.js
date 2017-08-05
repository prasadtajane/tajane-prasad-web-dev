/**
 * Created by prasadtajane on 8/5/17.
 */

var mongoose = require("mongoose");

var widgetSchema = new mongoose.Schema(
    {
        _user:String,
        name:String,
        description:String,
        pages:String,
        dateCreated:{type:Date, default:Date.now()}
    },
    {collection: "widget"});

module.exports = widgetSchema;