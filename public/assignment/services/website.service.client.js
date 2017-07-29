/**
 * Created by prasadtajane on 7/20/17.
 */

(function () {
    angular
        .module("WamApp")
        .service("websiteService", websiteService)

    function websiteService($http)   {

        this.findWebsiteByUserId = findWebsiteByUserId;
        this.findWebsitesByUser = findWebsitesByUser;
        this.findWebsiteByName = findWebsiteByName;
        this.findWebsiteById = findWebsiteById;
        this.createWebsite = createWebsite;
        this.updateWebsite = updateWebsite;
        this.deleteWebsite = deleteWebsite;

        var websites = [];

        function findWebsiteByUserId(userId) {
            //alert("inside client service - findWebsiteByUserId");
            return $http.get("/api/profile/" + userId + "/website");
        }

        function findWebsitesByUser(userId) {
            return this.findWebsiteByUserId(userId);
        }

        function findWebsiteByName(userId, websiteName) {
            return $http.get("/api/profile/" + userId + "/website?websiteName=" + websiteName);
        }

        function findWebsiteById(userId, websiteId) {
            return $http.get("/api/profile/"+ userId + "/website/" + websiteId);
        }

        function createWebsite(userId, website) {
            //"/api/profile/:userId/website"
            return $http.post("/api/profile/"+ userId + "/website", website);
/*
            for (var w in websites) {
                if (websites[w].name === website.name)    {
                    alert("Website with name '" + website.name + "' already exists !");
                    return null;
                }
            }

            website._id = (new Date()).getTime() + "";
            website.developerId = userId;
            website.visited = "1";
            website.updated = ((new Date().getMonth()+1)+ "/" + new Date().getDate()+ "");

            websites.push(website);
            return websites;*/
        }

        function updateWebsite(userId, websiteId, website1)  {
            return $http.put("/api/profile/"+ userId + "/website/" + websiteId, website1);
        }

        function deleteWebsite(userId, websiteId)   {
            //"api/profile/:userId/website/:websiteId"
            return $http.delete("/api/profile/"+ userId + "/website/" + websiteId);
        }

    }

})();