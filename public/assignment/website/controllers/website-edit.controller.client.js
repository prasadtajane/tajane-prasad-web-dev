/**
 * Created by prasadtajane on 7/21/17.
 */

(function() {
    angular
        .module("WamApp")
        .controller("editWebsiteController", editWebsiteController);

    function editWebsiteController($location, $routeParams, websiteService)    {

        var model = this;
        var userId = $routeParams.userId;
        var websiteId = $routeParams.websiteId;

        model.backToProfile=backToProfile;
        model.backToWebsiteList=backToWebsiteList;
        model.updateWebsite=updateWebsite;
        model.deleteWebsite=deleteWebsite;
        model.goToPages=goToPages;

        function init() {
            model.website = websiteService.findWebsiteById(websiteId);
            //alert(model.website.description);
        }
        init();

        function backToProfile() {
            //alert("inside backToProfile")
            $location.url("/profile/" + userId);
        }

        function backToWebsiteList() {
            $location.url("/profile/" + userId + "/website");
        }

        function updateWebsite(website) {
            //alert("Inside update website");
            websiteService.updateWebsite(websiteId, website);
            $location.url("/profile/" + userId + "/website");
        }

        function deleteWebsite()   {
            //alert("Inside delete website");
            websiteService.deleteWebsite(websiteId);
            $location.url("/profile/" + userId + "/website");

        }
        
        function goToPages() {
            ///user/:userId/website/:websiteId/page
            $location.url("/profile/" + userId + "/website/" + websiteId + "/page");
        }


        model.brand="Edit Website";
        model.object=model.website;
        model.chevronLeft=chevronLeft;
        model.okay=okay;

        function chevronLeft() {
            backToWebsiteList();
        }

        function okay(website) {
            model.updateWebsite(website);
        }


    }
})();