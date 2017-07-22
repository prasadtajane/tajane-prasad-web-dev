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

        model.trust=trust;
        model.backToProfile=backToProfile;
        model.backToPageList=backToPageList;
        model.findWidgetByPageId=findWidgetByPageId;
        model.goToNewWidgetChooser=goToNewWidgetChooser;
        model.getEmbededYouTubeLink=getEmbededYouTubeLink;

        function init() {
            model.widgetList = widgetService.findWidgetsByPageId(pageId);
            return model.widgetList;
        }
        init();

        function trust(html) {
            return $sce.trustAsHtml(html);
        }

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

        function getEmbededYouTubeLink(linkUrl) {
            var embed = "https://www.youtube.com/embed/";
            var splitUrl = linkUrl.split('/');
            embed += splitUrl[(splitUrl.length)-1];
            return $sce.trustAsResourceUrl(embed);
        }
    }
})();