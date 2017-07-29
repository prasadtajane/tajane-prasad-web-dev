/**
 * Created by prasadtajane on 7/27/17.
 */

var app = require("../../express");

var websites = [
    { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem", "visited": "2000" },
    { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem", "visited": "3000" },
    { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem", "visited": "4000" },
    { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem", "visited": "5000" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem", "visited": "6000" },
    { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem", "visited": "7000" },
    { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem", "visited": "7500" }
];

app.get("/api/profile/:userId/website",getWebsites);
app.get("/api/profile/:userId/website/:websiteId",findWebsiteById);

app.post("/api/profile/:userId/website", createWebsite);
app.put("/api/profile/:userId/website/:websiteId", updateWebsite);
app.delete("/api/profile/:userId/website/:websiteId", deleteWebsite);


function getWebsites(request, response) {
    var websiteName = request.query.websiteName;
    if (websiteName)   {
        response.send(findWebsiteByName(websiteName));
    }
    else  {
        //alert("inside website service - findWebsiteByUserId");
        response.send(findWebsiteByUserId(request, response));
    }
}

function findWebsiteByName(websiteName) {
    for (w in websites)    {
        if (websites[w].name === websiteName) {
            return websites[w];
        }
    }
    return ("0");
}

function findWebsiteByUserId(request, response) {
    var userId = request.params.userId;
    websiteList = [];
    for (var w in websites) {
        if (websites[w].developerId === userId)   {
            websites[w].updated = ((new Date().getMonth()+1)+ "/" + new Date().getDate()+ "");
            websiteList.push(websites[w]);
        }
        //alert("Not matched " + websites[w].developerId + " with " + userId);
    }
    return websiteList;
}

function findWebsiteById(request, response) {
    var websiteId = request.params.websiteId;
    for (w in websites)    {
        if( websites[w]._id === websiteId )    {
            response.send(websites[w]);
            return;
        }
    }
    response.send("0");
    return;
}


function createWebsite(request, response) {
    var userId = request.params.userId;
    var newWebsite = request.body;

    for (var w in websites) {
        if (websites[w].name === newWebsite.name)    {
            //alert("Website with name '" + website.name + "' already exists !");
            response.send("0");
            return null;
        }
    }
    newWebsite._id = (new Date()).getTime() + "";
    newWebsite.developerId = userId;
    newWebsite.visited = "1";
    newWebsite.updated = ((new Date().getMonth()+1)+ "/" + new Date().getDate()+ "");
    websites.push(newWebsite);
    response.send(newWebsite);
    return;
}

function updateWebsite(request, response) {
    var websiteId = request.params.websiteId;
    var newWebsite = request.body;

    for(var w in websites) {
        if( websites[w]._id === websiteId ) {
            websites[w] = newWebsite;
            response.send(websites[w]);
            return;
        }
    }
    response.sendStatus(404);
    return;
}

function deleteWebsite(request, response) {
    var websiteId = request.params.websiteId;
    for(var w in websites) {
        if (websites[w]._id === websiteId) {
            websites.splice(w,1);
            response.send("200");
            return;
        }
    }
    response.sendStatus(404);
    return;
}