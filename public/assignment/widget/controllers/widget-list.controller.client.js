/**
 * Created by prasadtajane on 7/21/17.
 */

(function ()    {
    angular
        .module("WamApp")
        .controller("widgetController", widgetController);

    function widgetController($location, $routeParams, $sce, widgetService) {

        var model = this;

        var pageId = $routeParams.pageId;
        var userId = $routeParams["userId"];
        var websiteId = $routeParams["websiteId"];

        model.backToProfile=backToProfile;
        model.backToPageList=backToPageList;
        model.findWidgetByPageId=findWidgetByPageId;
        model.goToNewWidgetChooser=goToNewWidgetChooser;

        function init() {
            model.widgetList = widgetService.findWidgetByPageId(pageId);
            return model.widgetList;
        }
        init();


        function backToProfile() {
            //alert("inside backToProfile from page-new.controller")
            $location.url("/profile/" + userId);
        }

        function backToPageList() {
            //alert("inside backToPageList from page-new.controller")
            $location.url("/profile/" + userId + "/website/" + websiteId + "/page");
        }

        function findWidgetByPageId()    {
            return widgetService.findWidgetByPageId(pageId);
        }

        function goToNewWidgetChooser() {
            ///user/:uid/website/:wid/page/:pid/widget/new
            $location.url("/profile/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/new");
        }
    }
})();