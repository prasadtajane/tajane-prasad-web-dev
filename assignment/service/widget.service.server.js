/**
 * Created by prasadtajane on 7/27/17.
 */

var app = require("../../express");

var widgets = [
    { "_id": "123"
        , "name": "Heading1"
        , "widgetType": "HEADING"
        , "pageId": "321"
        , "size": 2
        , "text": "GIZMODO"},
    { "_id": "234"
        , "name": "Heading2"
        , "widgetType": "HEADING"
        , "pageId": "321"
        , "size": 4
        , "text": "Lorem ipsum"},
    { "_id": "345"
        , "name": "Image1"
        , "widgetType": "IMAGE"
        , "pageId": "321"
        , "text": "lorempixel"
        , "width": "100%"
        , "url": "http://lorempixel.com/400/200/"},
    { "_id": "456"
        , "name": "Html1"
        , "widgetType": "HTML"
        , "pageId": "321"
        , "text": "<p>Lorem ipsum</p>"},
    { "_id": "567"
        , "name": "Heading3"
        , "widgetType": "HEADING"
        , "pageId": "321"
        , "size": 4
        , "text": "Lorem ipsum"},
    { "_id": "678"
        , "name": "youtube1"
        , "widgetType": "YOUTUBE"
        , "pageId": "321"
        , "text": "321"
        , "width": "100%"
        , "url": "https://youtu.be/AM2Ivdi9c4E" },
    { "_id": "789"
        , "name": "Html2"
        , "widgetType": "HTML"
        , "pageId": "321"
        , "text": "<p>Lorem ipsum</p>"}
        ];


app.get("/api/profile/:userId/website/:websiteId/page/:pageId/widget",getwidgets);
app.get("/api/profile/:userId/website/:websiteId/page/:pageId/widget/:widgetId",findWidgetById);

app.post("/api/profile/:userId/website/:websiteId/page/:pageId/widget", createWidget);
app.put("/api/profile/:userId/website/:websiteId/page/:pageId/widget/:widgetId", updateWidget);
app.delete("/api/profile/:userId/website/:websiteId/page/:pageId/widget/:widgetId", deleteWidget);


function getwidgets(request, response) {
    var widgetName = request.query.widgetName;
    if (widgetName)   {
        response.send(findWidgetByName(widgetName));
    }
    else  {
        //alert("inside website service - findWebsiteByUserId");
        response.send(findWidgetsByPageId(request, response));
    }
}

function findWidgetByName(widgetName) {
    for (w in widgets)    {
        if (widgets[w].name === widgetName) {
            return widgets[w];
        }
    }
    return ("0");
}

function findWidgetsByPageId(request, response) {
    var pageId = request.params.pageId;
    widgetList = [];
    for (var w in widgets) {
        if (widgets[w].pageId === pageId && typeof widgets[w].name !== 'undefined' && typeof widgets[w].text !== 'undefined') {
            widgetList.push(widgets[w]);
        }
        //alert("Not matched " + widgets[w].developerId + " with " + userId);
    }
    return widgetList;
}

function findWidgetById(request, response) {
    var widgetId = request.params.widgetId;
    for (var w in widgets)    {
        if( widgets[w]._id === widgetId )    {
            response.send(widgets[w]);
            return;
        }
    }
    response.send("0");
    return;
}


function createWidget(request, response) {
    var pageId = request.params.pageId;
    var newWidget = request.body;

    for (var w in widgets) {
        if (widgets[w].name === newWidget.name)    {
            //alert("Website with name '" + website.name + "' already exists !");
            response.send("0");
            return null;
        }
    }
    newWidget._id = (new Date()).getTime() + "";
    newWidget.pageId = pageId;
    widgets.push(newWidget);
    response.send(newWidget);
    return;
}

function updateWidget(request, response) {
    var widgetId = request.params.widgetId;
    var newWidget = request.body;

    for(var w in widgets) {
        if( widgets[w]._id === widgetId ) {
            widgets[w] = newWidget;
            response.send(widgets[w]);
            return;
        }
    }
    response.sendStatus(404);
    return;
}

function deleteWidget(request, response) {
    var widgetId = request.params.widgetId;
    for(var w in widgets) {
        if (widgets[w]._id === widgetId) {
            widgets.splice(w,1);
            response.send("200");
            return;
        }
    }
    response.sendStatus(404);
    return;
}