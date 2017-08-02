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


var multer = require('multer'); // npm install multer --save
var upload = multer({ dest: __dirname+'/../../public/assignment/uploads' });

app.post ("/api/assignment/uploads", upload.single('myFile'), uploadImage);


app.get("/api/profile/:userId/website/:websiteId/page/:pageId/widget",getwidgets);
app.get("/api/profile/:userId/website/:websiteId/page/:pageId/widget/:widgetId",findWidgetById);

app.post("/api/profile/:userId/website/:websiteId/page/:pageId/widget", createWidget);
app.put("/api/profile/:userId/website/:websiteId/page/:pageId/widget/:widgetId", updateWidget);
app.delete("/api/profile/:userId/website/:websiteId/page/:pageId/widget/:widgetId", deleteWidget);

app.put("/api/page/:pageId/widget", sortable);

function sortable(request, response) {
    var start = request.query.initial;
    var end = request.query.final;
    console.log("Inside Server");
    console.log([start, end]);
    widgets.splice(end, 0, (widgets.splice(start, 1))[0]);
    response.sendStatus(200);
    return;
}

function uploadImage(req, res) {

    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

//console.log(myFile);

    var originalname  = myFile.originalname; // file name on user's computer
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    var fileName      = originalname.split(".")
    //console.log(fileName);
    //type              = fileName[fileName.length-1];
    //console.log(type);
    var name          = myFile.name;
    var width         = myFile.widhth;
    var text          = myFile.text;

    //myFile.filename   = (new Date()).getTime() + "." +myFile.originalname;
    //var filename      = myFile.filename;     // new file name in upload folder

    var widget = getWidgetById(widgetId);
    widget.url = '/assignment/uploads/'+myFile.filename ;

    widget.myFile = myFile;
    widget.name = name;
    widget.width = width;
    widget.text = text;

    //console.log(widget);
    //console.log(widget.url);

    //  /api/profile/:userId/website/:websiteId/page/:pageId/widget
    //  http://localhost:3000/assignment/index.html#!/profile/456/website/456/page/321/widget
    var callbackUrl   = "/assignment/index.html#!/profile/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId;

    res.redirect(callbackUrl);
}

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

function getWidgetById(widgetId) {
    for (var w in widgets)    {
        if( widgets[w]._id === widgetId )    {
            //response.send(widgets[w]);
            return widgets[w];
        }
    }
    //response.send("0");
    return "0";
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