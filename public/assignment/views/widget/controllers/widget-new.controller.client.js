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

    function newWidgetController($location, $routeParams, $sce, widgetService) {

        var model = this;

        var pageId = $routeParams.pageId;
        var userId = $routeParams["userId"];
        var websiteId = $routeParams["websiteId"];

        model.createWidget=createWidget;
        model.backToProfile=backToProfile;
        model.backToWidgets=backToWidgets;
        model.goToNewWidget=goToNewWidget;

        model.getSnippetUrl=getSnippetUrl;
        model.goToEditWidget=goToEditWidget;
        model.getEmbededYouTubeLink=getEmbededYouTubeLink;

        function init() {

            model.widgetList = widgetService.findWidgetsByPageId(pageId);
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
        
        function goToNewWidget(name) {
            //get name from chooser page
            //create new widget object and assign id
            //assign widget type according to the name
            //now redirect(locate) url to the edit page

            var type = name;
            if (type === 'header') {
                type = 'heading';
            }
            var widget = {
                "widgetType": type.toUpperCase()
            }
            //alert(widget.widgetType);
            var newWidget = widgetService.createWidget(pageId, widget);
            var newWidgetId = newWidget._id;

            $location.url("/profile/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + newWidgetId);
        }


        function trust(html) {
            return $sce.trustAsHtml(html);
        }

        function getSnippetUrl(type) {
            //alert(type);
            return ("views/widget/templates/snippets/widget-" + type.toLowerCase() + "-snippet.view.client.html");
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