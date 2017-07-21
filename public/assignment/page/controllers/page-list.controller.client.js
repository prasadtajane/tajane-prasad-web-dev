/**
 * Created by prasadtajane on 7/20/17.
 */

(function () {
    angular
        .module("WamApp")
        .controller("pageController", pageController);

    function pageController($location, $routeParams, pageService) {

        var model = this;

        model.backToWebsiteList=backToWebsiteList;
        model.backToProfile=backToProfile;
        model.createNewPage=createNewPage;
        model.editPage=editPage;

        var userId = $routeParams["userId"];
        var websiteId = $routeParams["websiteId"];

        function init() {
            //alert("Inside page-list.controller init.")
            model.pageList = pageService.findPagesByWebsite(websiteId);
            return model.pageList;
            //alert("Hello " + userId);
        }
        init();

        function backToWebsiteList() {
            $location.url("/profile/" + userId + "/website");
        }

        function backToProfile() {
            $location.url("/profile/" + userId);
        }

        function createNewPage() {
            $location.url("/profile/" + userId + "/website/" + websiteId + "/page/new");
        }

        function editPage(pageName) {
            //find page
            //get page id
            //add in location
            //alert("Finding page with name '" + pageName + "'");
            model.page = pageService.findPageByName(pageName);
            var pageId = model.page._id;
            $location.url("/profile/" + userId + "/website/" + websiteId + "/page/" + pageId);
        }

    }
})();