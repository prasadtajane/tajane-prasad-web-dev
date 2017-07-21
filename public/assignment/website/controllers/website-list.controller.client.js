/**
 * Created by prasadtajane on 7/20/17.
 */

(function () {
    angular
        .module("WamApp")
        .controller("weblistController", weblistController);

    function weblistController($location, $routeParams, websiteService) {

        var model = this;
        model.backToProfile=backToProfile;
        model.createNewWebsite=createNewWebsite;
        model.editWebsite=editWebsite;
        model.goToPages=goToPages;

        var userId = $routeParams["userId"];

        function init() {
            model.websiteList = websiteService.findWebsiteByUserId(userId);
            return model.websiteList;
            //alert("Hello " + userId);
        }
        init();

        function backToProfile() {
            $location.url("/profile/" + userId);
        }

        function createNewWebsite() {
            $location.url("/profile/" + userId + "/website/new");
        }

        function editWebsite(websiteName) {
            //find website
            //get website id
            //add in location
            //alert("Finding website with name '" + websiteName + "'");
            model.website = websiteService.findWebsiteByName(websiteName);
            var websiteId = model.website._id;
            $location.url("/profile/" + userId + "/website/" + websiteId);
        }

        function goToPages(websiteName)    {
            model.website = websiteService.findWebsiteByName(websiteName);
            var websiteId = model.website._id;
            $location.url("/profile/" + userId + "/website/" + websiteId + "/page");
        }

    }
})();