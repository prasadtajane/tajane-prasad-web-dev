/**
 * Created by prasadtajane on 8/4/17.
 */
var mongoose = require('mongoose');
var db = require("../models.server");

var websiteSchema = require("./website.schema.server");
var websiteModel = mongoose.model("WebsiteModel", websiteSchema);

websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.findWebsiteByName = findWebsiteByName;
websiteModel.createWebsiteForUser = createWebsiteForUser;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;

module.exports = websiteModel;
Website = websiteModel;




function createWebsiteForUser(userId, website) {
    return Website.create(website);
}

function findWebsiteById(websiteId){
    return Website.findOne({_id:websiteId});
}

function findWebsiteByName(websiteName){
    console.log("inside website model");
    console.log(websiteName);
    return Website.findOne({name:websiteName});
}

function findAll() {
    return Website.find(callback);
}

function findAllWebsitesForUser(userId) {
    //console.log(userId);
    return Website.find({_user: userId})
}

function updateWebsite(websiteId, website)   {
    return Website.update({_id:websiteId}, {$set: website});
}

function deleteWebsite(websiteId) {
    return Website.remove({_id:websiteId});
}


//website = {"_user" : "59852da4cd24bf4f03ed2690", "name" : "Checkmate", "description" : "M"}
//createWebsiteForUser("59852da4cd24bf4f03ed2690", website);
//findAll();
//console.log("print");
//findAllWebsitesForUser("456");
//findWebsiteById("59852fe522c8f94f25051eed");
//website = {"_user" : "59852da4cd24bf4f03ed6699", "name" : "Checker", "description" : "Moto"}
//updateWebsite("59852fe522c8f94f25051eed", website);
//deleteWebsite("59852fe522c8f94f25051eed");
