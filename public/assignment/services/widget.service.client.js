/**
 * Created by prasadtajane on 7/21/17.
 */
(function() {
    angular
        .module("WamApp")
        .factory("widgetService", widgetService);

    function widgetService($http) {

        var widgets = [];

        var api =  {
            findWidgetsByPageId:findWidgetsByPageId,
            createWidget:createWidget,
            findWidgetById:findWidgetById,
            updateWidget:updateWidget,
            deleteWidget:deleteWidget,
            getWidgetId:getWidgetId,
            clean:clean
        };
        return api;

        //findWidgetsByPageId(pageId)
        function findWidgetsByPageId(userId, websiteId, pageId)    {
            //http://localhost:3000/api/profile/456/website/456/page/321/widget
            return $http.get("/api/profile/" + userId +"/website/" + websiteId +"/page/" + pageId +"/widget");
            /*//clean();
            //alert("page id is " + pageId);
            var widgetsList = [];
            //alert("created widgetsList");
            for (w in widgets)  {
                //alert("inside for");
                if (widgets[w].pageId === pageId && typeof widgets[w].name !== 'undefined' && typeof widgets[w].text !== 'undefined') {
                    widgetsList.push(widgets[w]);
                }
                //alert("Not matched " + widgets[w].pageId + " with " + pageId);
            }
            //alert(widgetsList);
            return angular.copy(widgetsList);*/
        }

        //createWidget(pageId, widget)
        function createWidget(userId, websiteId, pageId, widget)   {
            //http://localhost:3000/api/profile/456/website/456/page/321/widget
            return $http.post("/api/profile/" + userId +"/website/" + websiteId +"/page/" + pageId +"/widget", widget);
            /*widget._id = (new Date()).getTime() + "";
            widget.pageId = pageId;
            widgets.push(widget);
            return widget;*/
        }

        //findWidgetById(widgetId)
        function findWidgetById(userId, websiteId, pageId, widgetId)   {
            //http://localhost:3000/api/profile/456/website/456/page/321/widget/123
            return $http.get("/api/profile/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
            /*for (w in widgets)  {
                if (widgets[w]._id === widgetId) {
                    return angular.copy(widgets[w]);
                }
            }
            return null;*/
        }

        //updateWidget(widgetId, widget)
        function updateWidget(userId, websiteId, pageId, widgetId, widget) {
            //http://localhost:3000/api/profile/456/website/456/page/321/widget/123
            return $http.put("/api/profile/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId, widget);
            /*for(w in widgets)   {
                if(widgets[w]._id === widgetId)    {
                    widgets[w] = widget;
                    return widgets[w];
                }
            }
            return null;*/
        }

        //deleteWidget(widgetId)
        function deleteWidget(userId, websiteId, pageId, widgetId) {
            //http://localhost:3000/api/profile/456/website/456/page/321/widget/123
            return $http.delete("/api/profile/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
            /*for(w in widgets) {
                if (widgets[w]._id === widgetId) {
                    widgets.splice(w, 1);
                }
            }*/
        }

        function getWidgetId(userId, websiteId, pageId, widget){
            return $http.get("/api/profile/" + userId +"/website/" + websiteId +"/page/" + pageId +"/widget");
        }

        function clean()    {
            //alert("inside actual clean");
            for(w in widgets)   {
                if(typeof widgets[w].name === 'undefined' && typeof widgets[w].text === 'undefined')    {
                    widgets.splice(w, 1);
                }
                //alert(widgets[w].name);
                //alert("inside actual clean first step");
                else if(widgets[w].widgetType === "YOUTUBE" || widgets[w].widgetType === "IMAGE")   {
                    if (typeof widgets[w].url === 'undefined') {
                        widgets.splice(w, 1);
                    }
                    //alert("inside actual clean second step");
                }
                //alert(widgets[w]._id + ", " + widgets[w].name);
            }
            //alert("exiting actual clean");
        }

    }
})();