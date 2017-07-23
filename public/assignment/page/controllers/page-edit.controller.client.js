/**
 * Created by prasadtajane on 7/21/17.
 */

(function() {
    angular
        .module("WamApp")
        .controller("editPageController", editPageController);

    function editPageController($location, $routeParams, pageService)    {

        var model = this;
        var userId = $routeParams.userId;
        var pageId = $routeParams.pageId;
        var websiteId = $routeParams.websiteId;

        model.goToWidgetList=goToWidgetList;
        model.backToPageList=backToPageList;
        model.backToProfile=backToProfile;
        model.updatePage=updatePage;
        model.deletePage=deletePage;
        model.goToPages=goToPages;

        function init() {
            //alert("Inside page-edit.controller init. pageId - " + pageId)
            model.page = pageService.findPageById(pageId);
            //alert(model.page);
            model.pageList = pageService.findPagesByWebsite(websiteId);
            return model.page;
        }
        init();

        function backToProfile() {
            //alert("inside backToProfile")
            $location.url("/profile/" + userId);
        }

        function backToPageList() {
            //alert("inside backToPageList from page-edit.controller")
            $location.url("/profile/" + userId + "/website/" + websiteId + "/page");
        }

        //function updatePage(pageId, page1)
        function updatePage(page1) {
            //alert("Inside update website");
            pageService.updatePage(pageId, page1);
            $location.url("/profile/" + userId + "/website/" + websiteId + "/page");
        }

        //function deletePage(pageId)
        function deletePage()   {
            //alert("Inside delete website");
            pageService.deletePage(pageId);
            $location.url("/profile/" + userId + "/website/" + websiteId + "/page");

        }
        
        function goToPages() {
            ///user/:userId/website/:websiteId/page
            $location.url("/profile/" + userId + "/website/" + websiteId + "/page");
        }

        function goToWidgetList() {
            ///profile/:userId/website/:websiteId/page/pageId/widget
            $location.url("/profile/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget");
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


        model.brand="Edit Page";
        model.chevronLeft=chevronLeft;
        model.object=model.page;
        model.okay=okay;

        function chevronLeft() {
            backToPageList();
        }

        function okay(page) {
            updatePage(page);
        }
    }
})();