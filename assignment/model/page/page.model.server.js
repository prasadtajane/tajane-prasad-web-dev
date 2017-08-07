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
pageModel.findPageByName = findPageByName;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;

module.exports = pageModel;
Page = pageModel;





function createPage(websiteId, page) {
    return Page.create(page);
}

function findPageById(pageId){
    return Page.findOne({_id:pageId});
}

function findAll() {
    return Page.find();
}

function findPageByName(pageName)   {
    return Page.findOne({name: pageName});
}

function findAllPagesForWebsite(websiteId) {
    return Page.find({_website: websiteId})
}

function updatePage(pageId, page)   {
    return Page.update({_id:pageId},{$set: page});
}

function deletePage(pageId) {
    return Page.remove({_id:pageId});
}


//page={"_website" : "456", "name" : "Post 769", "description" : "lLeLo"};
//findAll();
//createPage("59852da4cd24bf4f03ed2699", page)
//findAllPagesForWebsite("111")
//findPageById("59853593c584f24f737880f9");
//updatePage("59853593c584f24f737880f9", page)
//deletePage("598539282351ba4fa09569ae")
