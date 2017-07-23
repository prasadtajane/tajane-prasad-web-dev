/**
 * Created by prasadtajane on 7/22/17.
 */

(function () {
    angular
        .module("WamApp")
        .controller("editWidgetController", editWidgetController);

    function editWidgetController($location, $routeParams, $sce, widgetService) {

        var model = this;

        var pageId = $routeParams.pageId;
        var userId = $routeParams["userId"];
        var widgetId = $routeParams.widgetId;
        var websiteId = $routeParams["websiteId"];

        model.updateWidget=updateWidget;
        model.deleteWidget=deleteWidget;
        model.backToProfile=backToProfile;
        model.backToWidgets=backToWidgets;

        model.getSnippetUrl=getSnippetUrl;
        model.goToEditWidget=goToEditWidget;
        model.getEmbededYouTubeLink=getEmbededYouTubeLink;

        function init() {
            model.widgetList = widgetService.findWidgetsByPageId(pageId);
            model.widgets = widgetService.findWidgetsByPageId(pageId);
            model.widget = widgetService.findWidgetById(widgetId);
            //return model.widgets;
        }
        init();

        function updateWidget(widget) {
            widgetService.updateWidget(widgetId, widget);
            $location.url("/profile/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget");
        }

        function deleteWidget() {
            widgetService.deleteWidget(widgetId);
            $location.url("/profile/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget");
        }

        function backToProfile() {
            //alert("inside backToProfile from page-new.controller")
            $location.url("/profile/" + userId);
        }

        function backToWidgets() {
            $location.url("/profile/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget");
        }

        function getSnippetUrl(type) {
            //alert(type);
            return ("widget/view/snippets/widget-" + type.toLowerCase() + "-snippet.view.client.html");
        }

        function goToEditWidget(widget) {
            ///profile/:userId/website/:websiteId/page/:pageId/widget/:widgetId
            var widgetId = widgetService.getWidgetId(widget);
            $location.url("/profile/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);
        }

        function getEmbededYouTubeLink(linkUrl) {
            var embed = "https://www.youtube.com/embed/";
            var splitUrl = linkUrl.split('/');
            embed += splitUrl[(splitUrl.length)-1];
            return $sce.trustAsResourceUrl(embed);
        }
    }
})();