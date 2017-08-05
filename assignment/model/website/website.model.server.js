/**
 * Created by prasadtajane on 8/4/17.
 */
var mongoose = require('mongoose');
var db = require("../models.server");

var websiteSchema = require("./website.schema.server");
var websiteModel = mongoose.model("UserModel", websiteSchema);

websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.createWebsiteForUser = createWebsiteForUser;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;

module.exports = websiteModel;
Website = websiteModel;




function callback(err, result)   {
    console.log(result);
}


function createWebsiteForUser(userId, website) {
    Website.create({
        _user:userId,
        name:website.name,
        description:website.description,
        pages:website.pages,
        dateCreated:website.dateCreated
    }, callback);
    console.log("Website Created!");
}

function findWebsiteById(websiteId){
    Website.findOne({_id:websiteId},callback);
}

function findAll() {
    Website.find(callback);
}

function findAllWebsitesForUser(userId) {
    Website.find({_user: userId}, callback)
}

function updateWebsite(websiteId, website)   {
    Website.update({_id:websiteId}, website, callback);
}

function deleteWebsite(websiteId) {
    Website.remove({_id:websiteId}, callback);
}


//website = {"_user" : "59852da4cd24bf4f03ed2690", "name" : "Checkmate", "description" : "M"}
//createWebsiteForUser("59852da4cd24bf4f03ed2690", website);
//findAll();
//findAllWebsitesForUser("59852da4cd24bf4f03ed2690");
//findWebsiteById("59852fe522c8f94f25051eed");
//website = {"_user" : "59852da4cd24bf4f03ed6699", "name" : "Checker", "description" : "Moto"}
//updateWebsite("59852fe522c8f94f25051eed", website);
//deleteWebsite("59852fe522c8f94f25051eed");
