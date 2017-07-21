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

        var userId = $routeParams["userId"];
        //var websiteId = $routeParams["websiteId"];

        function init() {
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

    }
})();