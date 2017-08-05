/**
 * Created by prasadtajane on 8/4/17.
 */

var mongoose = require('mongoose');
var db = require("../models.server");

var widgetSchema = require("./widget.schema.server");
var widgetModel = mongoose.model("WidgetModel", widgetSchema);

widgetModel.createWidget = createWidget;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;
widgetModel.findWidgetById = findWidgetById;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;

module.exports = widgetModel;
Widget = widgetModel;




function callback(err, result)   {
    console.log(result);
    return result;
}


function createWidget(pageId, widget) {
    widget._page = pageId;
    Widget.create(widget, callback);
    console.log("widget Created!");
}

function findWidgetById(widgetId)   {
    Widget.findOne({_id:widgetId},callback);
}

function findAll() {
    Widget.find(callback);
}

function findAllWidgetsForPage(pageId) {
    Widget.find({_page: pageId}, callback)
}

function updateWidget(widgetId, widget)   {
    Widget.update({_id:widgetId}, widget, callback);
}

function deleteWidget(widgetId) {
    Widget.remove({_id:widgetId}, callback);
}

widget={ _page: '321', name: 'Test2345', text: 'Loremo o ipsumo', size: 1};

function reorderWidget(pageId, start, end) {
    // save the start in temp then delete
    // start from end go till length
    //      save current in newTemp
    //      update current with temp
    //      make temp as newTemp
    var widgets = findAll();

    for(w in widgets)   {
        if (start === end)  {
            break;
        }
        if(start < end)    {
            if (w < start)  {
                continue;
            }
            else if(w === start)   {
                var affectedWidget = widgets[w];
                var affectedWidgetId = widgets[w]._id;
                var wId = affectedWidgetId;
            }
            else if(w < end)    {
                var temp = widgets[w];
            }
        }
    }

}

findAll();
//createWidget("59852da4cd24bf4f03ed2694", widget)
//findAllWidgetsForPage("59852da4cd24bf4f03ed2694")
//findWidgetById("59853c0ef89d954fcce7aaf5")
//updateWidget("59853c0ef89d954fcce7aaf5", widget)
//deleteWidget("59853c0ef89d954fcce7aaf5")
//===========reorderWidget(pageId, start, end)
