/**
 * Created by prasadtajane on 7/20/17.
 */

(function () {
    angular
        .module("WamApp")
        .controller("newPageController", newPageController);

    function newPageController($location, $routeParams, pageService) {

        var model = this;
        model.backToProfile=backToProfile;
        model.backToPageList=backToPageList;

        var userId = $routeParams["userId"];
        var websiteId = $routeParams["websiteId"];

        function init() {
            //alert("Inside page-new.controller init.")
            model.object=model.page;
            model.pageList = pageService.findPagesByWebsite(websiteId);
            return model.pageList;
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


        model.create = (
            function (page) {
                if (typeof page === "undefined")   {
                    alert("Page name and description cannot be null!")
                    return;
                }
                else if (page.name === null || page.description === null)   {
                    alert("Page name and description cannot be null!")
                    return;
                }
                else    {
                    //createPage(websiteId, page)
                    pageService.createPage(websiteId, page);
                }
                $location.url("/profile/" + userId + "/website/" + websiteId + "/page");
            })


        model.brand="New Page";
        model.chevronLeft=chevronLeft;
        model.okay=okay;

        function chevronLeft() {
            backToWebsiteList();
        }

        function okay(page) {
            model.create(model.page);
        }

    }
})();