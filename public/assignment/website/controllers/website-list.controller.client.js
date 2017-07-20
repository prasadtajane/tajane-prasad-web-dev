/**
 * Created by prasadtajane on 7/20/17.
 */

(function () {
    angular
        .module("WamApp")
        .controller("weblistController", weblistController);

    function weblistController($location, $routeParams) {
        var model = this;

        var userId = $routeParams["userId"];

        function init() {
            //model.websiteList = findWebsiteByUserId(userId);
            //alert("Hello " + userId);
        }
        init();

        var websites = [
            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem", "visited": "2000" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem", "visited": "3000" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem", "visited": "4000" },
            { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem", "visited": "5000" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem", "visited": "6000" },
            { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem", "visited": "7000" },
            { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem", "visited": "7500" }
        ];

        function findWebsiteByUserId(userId) {
            model.websiteList = [];
            for (var w in websites) {
                if (websites[w].developerId === userId)   {
                    websites[w].updated = ((new Date().getMonth()+1)+ "/" + new Date().getDate()+ "");
                    model.websiteList.push(websites[w]);
                }
                //alert("Not matched " + websites[w].developerId + " with " + userId);
            }
            return model.websiteList;
        }
        findWebsiteByUserId(userId);
    }
})();