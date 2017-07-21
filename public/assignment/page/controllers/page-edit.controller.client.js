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
            this.goToPages();
        }

        //function deletePage(pageId)
        function deletePage()   {
            //alert("Inside delete website");
            pageService.deletePage(pageId);
            this.goToPages();

        }
        
        function goToPages() {
            ///user/:userId/website/:websiteId/page
            $location.url("/profile/" + userId + "/website/" + websiteId + "/page");
        }

        function goToWidgetList() {
            ///profile/:userId/website/:websiteId/page/pageId/widget
            $location.url("/profile/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget");
        }

    }
})();