/**
 * Created by prasadtajane on 7/27/17.
 */

var app = require("../../express");

var pages = [];

app.get("/api/profile/:userId/website/:websiteId/page",getpages);
app.get("/api/profile/:userId/website/:websiteId/page/:pageId",findPageById);

app.post("/api/profile/:userId/website/:websiteId/page", createPage);
app.put("/api/profile/:userId/website/:websiteId/page/:pageId", updatePage);
app.delete("/api/profile/:userId/website/:websiteId/page/:pageId", deletePage);


function getpages(request, response) {
    var pageName = request.query.pageName;
    if (pageName)   {
        response.send(findPageByName(pageName));
    }
    else  {
        //alert("inside website service - findWebsiteByUserId");
        response.send(findPageByWebsiteId(request, response));
    }
}

function findPageByName(pageName) {
    for (p in pages)    {
        if (pages[p].name === pageName) {
            return pages[p];
        }
    }
    return ("0");
}

function findPageByWebsiteId(request, response) {
    var websiteId = request.params.websiteId;
    pageList = [];
    for (var p in pages) {
        if (pages[p].websiteId === websiteId)   {
            pageList.push(pages[p]);
        }
        //alert("Not matched " + pages[w].developerId + " with " + userId);
    }
    return pageList;
}

function findPageById(request, response) {
    var pageId = request.params.pageId;
    for (p in pages)    {
        if(pages[p]._id === pageId)    {
            response.send(pages[p]);
            return;
        }
    }
    response.send("0");
    return;
}


function createPage(request, response) {
    var websiteId = request.params.websiteId;
    var newPage = request.body;

    for (var p in pages) {
        if (pages[p].name === newPage.name)    {
            response.send("0");
            return null;
        }
    }
    newPage._id = (new Date()).getTime() + "";
    newPage.websiteId = websiteId;
    pages.push(newPage);
    response.send(newPage);
    return;
}

function updatePage(request, response) {
    var pageId = request.params.pageId;
    var newPage = request.body;

    for(var p in pages) {
        if( pages[p]._id === pageId ) {
            pages[p] = newPage;
            response.send(pages[p]);
            return;
        }
    }
    response.sendStatus(404);
    return;
}

function deletePage(request, response) {
    var pageId = request.params.pageId;
    for(var p in pages) {
        if (pages[p]._id === pageId) {
            pages.splice(p,1);
            response.send("200");
            return;
        }
    }
    response.sendStatus(404);
    return;
}