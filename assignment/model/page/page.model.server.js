/**
 * Created by prasadtajane on 8/4/17.
 */

var mongoose = require('mongoose');
var db = require("../models.server");

var pageSchema = require("./page.schema.server");
var pageModel = mongoose.model("PageModel", pageSchema);

pageModel.createPage = createPage;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;
pageModel.findPageById = findPageById;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;

module.exports = pageModel;
Page = pageModel;




function callback(err, result)   {
    console.log(result);
}


function createPage(websiteId, page) {
    page._website = websiteId;
    Page.create(page, callback);
    console.log("page Created!");
}

function findPageById(pageId){
    Page.findOne({_id:pageId},callback);
}

function findAll() {
    Page.find(callback);
}

function findAllPagesForWebsite(websiteId) {
    Page.find({_website: websiteId}, callback)
}

function updatePage(pageId, page)   {
    Page.update({_id:pageId}, page, callback);
}

function deletePage(pageId) {
    Page.remove({_id:pageId}, callback);
}


//page={"_website" : "456", "name" : "Post 769", "description" : "lLeLo"};
//findAll();
//createPage("59852da4cd24bf4f03ed2699", page)
//findAllPagesForWebsite("111")
//findPageById("59853593c584f24f737880f9");
//updatePage("59853593c584f24f737880f9", page)
//deletePage("598539282351ba4fa09569ae")
