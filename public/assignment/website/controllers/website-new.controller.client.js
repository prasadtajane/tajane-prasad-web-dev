/**
 * Created by prasadtajane on 7/20/17.
 */

(function () {
    angular
        .module("WamApp")
        .controller("newWebsiteController", newWebsiteController);

    function newWebsiteController($location, $routeParams, websiteService) {

        var model = this;

        model.backToProfile=backToProfile;
        model.backToWebsiteList=backToWebsiteList;
        model.findPages=findPages;

        model.createNewWebsite=createNewWebsite;
        model.editWebsite=editWebsite;
        model.goToPages=goToPages;

        var userId = $routeParams["userId"];
        //var websiteId = $routeParams["websiteId"];

        function init() {
            model.object=model.website;
            model.websiteList = websiteService.findWebsiteByUserId(userId);
            //return model.websiteList;
            //alert("Hello " + userId);
        }
        init();

        function backToProfile() {
            //alert("inside backToProfile")
            $location.url("/profile/" + userId);
        }

        function backToWebsiteList() {
            $location.url("/profile/" + userId + "/website");
        }

        function findPages() {
            ///user/:uid/website/:wid/page
            $location.url("/profile/" + userId + "/website/" + websiteId + "/page");
        }


        model.create = (
            function (website) {
                if (typeof website === "undefined")   {
                    alert("Website name and description cannot be null!")
                    return;
                }
                else if (website.name === null || website.description === null)   {
                    alert("Website name and description cannot be null!")
                    return;
                }
                else    {
                    websiteService.createWebsite(userId, website);
                }
                $location.url("/profile/" + userId + "/website");
            })


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



        model.brand="New Website";
        model.chevronLeft=chevronLeft;
        model.okay=okay;

        function chevronLeft() {
            backToWebsiteList();
        }

        function okay(website) {
            model.create(model.website);
        }

    }
})();