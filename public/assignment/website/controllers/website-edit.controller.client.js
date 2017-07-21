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

        function init() {
            model.website = websiteService.findWebsiteById(websiteId);
            //alert(model.website.description);
        }
        init();

        function backToProfile() {
            alert("inside backToProfile")
            $location.url("/profile/" + userId);
        }

        function backToWebsiteList() {
            $location.url("/profile/" + userId + "/website");
        }




    }
})();