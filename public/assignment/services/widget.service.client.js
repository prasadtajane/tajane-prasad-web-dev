/**
 * Created by prasadtajane on 7/21/17.
 */
(function() {
    angular
        .module("WamApp")
        .factory("widgetService", widgetService);

    function widgetService() {

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

        var api =  {
            findWidgetsByPageId:findWidgetsByPageId,
            createWidget:createWidget,
            findWidgetById:findWidgetById,
            updateWidget:updateWidget,
            deleteWidget:deleteWidget,
            getWidgetId:getWidgetId
        };
        return api;

        //findWidgetsByPageId(pageId)
        function findWidgetsByPageId(pageId)    {
            //alert("page id is " + pageId);
            var widgetsList = [];
            //alert("created widgetsList");
            for (w in widgets)  {
                //alert("inside for");
                if (widgets[w].pageId === pageId) {
                    widgetsList.push(widgets[w]);
                }
                //alert("Not matched " + widgets[w].pageId + " with " + pageId);
            }
            //alert(widgetsList);
            return widgetsList;
        }

        //createWidget(pageId, widget)
        function createWidget(pageId, widget)   {
            widget._id = (new Date()).getTime() + "";
            widget.pageId = pageId;
            widgets.push(widget);
            return widget;
        }

        //findWidgetById(widgetId)
        function findWidgetById(widgetId)   {
            for (w in widgets)  {
                if (widgets[w]._id === widgetId) {
                    return angular.copy(widgets[w]);
                }
            }
            return null;
        }

        //updateWidget(widgetId, widget)
        function updateWidget(widgetId, widget) {
            for(w in widgets)   {
                if(widgets[w]._id === widgetId)    {
                    widgets[w] = widget;
                    return widgets[w];
                }
            }
            return null;
        }

        //deleteWidget(widgetId)
        function deleteWidget(widgetId) {
            for(w in widgets) {
                if (widgets[w]._id === widgetId) {
                    widgets.splice(w, 1);
                }
            }
        }

        function getWidgetId(widget){
            for(w in widgets) {
                if (widgets[w].name === widget.name && widgets[w].widgetType === widget.widgetType && widgets[w].text === widget.text) {
                    return widgets[w]._id;
                }
            }
            return null;
        }

    }
})();