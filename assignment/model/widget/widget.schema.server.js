/**
 * Created by prasadtajane on 8/5/17.
 */

var mongoose = require("mongoose");

var widgetSchema = new mongoose.Schema({
    _page:String,
    widgetType:String,//enum
    name:String,
    text:String,
    placeholder:String,
    description:String,
    url:String,
    width:String,
    height:String,
    rows:Number,
    size:Number,
    class:String,
    icon:String,
    deletable:Boolean,
    formatted:Boolean,
    dateCreated:{type:Date, default:Date.now()}
},  {
    collection:"widget"
});

module.exports = widgetSchema;