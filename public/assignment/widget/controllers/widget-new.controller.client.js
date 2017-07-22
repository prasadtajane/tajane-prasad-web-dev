/**
 * Created by prasadtajane on 7/22/17.
 */
/**
 * Created by prasadtajane on 7/22/17.
 */

(function () {
    angular
        .module("WamApp")
        .controller("newWidgetController", newWidgetController);

    function newWidgetController($location, $routeParams, widgetService) {

        var model = this;

        var pageId = $routeParams.pageId;
        var userId = $routeParams["userId"];
        var websiteId = $routeParams["websiteId"];

        model.createWidget=createWidget;
        model.backToProfile=backToProfile;
        model.backToWidgets=backToWidgets;

        function init() {

        }
        init();

        function createWidget(widget) {
            widgetService.createWidget(pageId, widget);
            $location.url("/profile/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget");
        }

        function backToProfile() {
            //alert("inside backToProfile from page-new.controller")
            $location.url("/profile/" + userId);
        }
        
        function backToWidgets() {
            $location.url("/profile/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget");
        }
    }
})();