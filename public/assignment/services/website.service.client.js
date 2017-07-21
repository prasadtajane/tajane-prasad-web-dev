/**
 * Created by prasadtajane on 7/20/17.
 */

(function () {
    angular
        .module("WamApp")
        .service("websiteService", websiteService)

    function websiteService()   {

        this.findWebsiteByUserId = findWebsiteByUserId;
        this.findWebsitesByUser = findWebsitesByUser;
        this.findWebsiteByName = findWebsiteByName;
        this.findWebsiteById = findWebsiteById;
        this.createWebsite = createWebsite;
        this.updateWebsite = updateWebsite;
        this.deleteWebsite = deleteWebsite;

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
            websiteList = [];
            for (var w in websites) {
                if (websites[w].developerId === userId)   {
                    websites[w].updated = ((new Date().getMonth()+1)+ "/" + new Date().getDate()+ "");
                    websiteList.push(websites[w]);
                }
                //alert("Not matched " + websites[w].developerId + " with " + userId);
            }
            return websiteList;
        }

        function findWebsitesByUser(userId) {
            return this.findWebsiteByUserId(userId);
        }

        function findWebsiteByName(websiteName) {
            for (var w in websites) {
                if (websites[w].name === websiteName)    {
                    alert(websites[w]._id + "" + websites[w].name)
                    return websites[w];
                }
            }
            alert("Website with name '" + websiteName + "' Not Found!");
            return null;
        }

        function findWebsiteById(websiteId) {
            for (var w in websites) {
                if (websites[w]._id === websiteId)   {
                    websites[w].updated = ((new Date().getMonth()+1)+ "/" + new Date().getDate()+ "");
                    return websites[w];
                }
                //alert("Not matched " + websites[w].developerId + " with " + userId);
            }
        }

        function createWebsite(userId, website) {
            website._id = (new Date()).getTime() + "";
            website.developerId = userId;
            website.visited = "1";
            website.updated = ((new Date().getMonth()+1)+ "/" + new Date().getDate()+ "");

            websites.push(website);
            return websites;
        }

        function updateWebsite(websiteId, website1)  {
            for (var w in websites) {
                if (websites[w] === websiteId)  {
                    websites[w].updated=((new Date().getMonth()+1)+ "/" + new Date().getDate()+ "");
                    websites[w].name = website1.name;
                    websites[w].description = website1.description;

                    return websites[w];
                }
                return null;
            }
        }

        function deleteWebsite(websiteId)   {
            for (var w in websites) {
                if (websites[w]._id === websiteId) {
                    websites.splice(w, 1);
                }
            }
        }

    }

})();