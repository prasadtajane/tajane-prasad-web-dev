/**
 * Created by prasadtajane on 7/20/17.
 */

(function () {
    angular
        .module("WamApp")
        .controller("weblistController", weblistController);

    function weblistController($location, $routeParams, websiteService) {
        var model = this;

        var userId = $routeParams["userId"];

        function init() {
            model.websiteList = websiteService.findWebsiteByUserId(userId);
            return model.websiteList;
            //alert("Hello " + userId);
        }
        init();

    }
})();