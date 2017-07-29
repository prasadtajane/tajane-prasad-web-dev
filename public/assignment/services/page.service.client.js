/**
 * Created by prasadtajane on 7/21/17.
 */

(function () {
    angular
        .module("WamApp")
        .service("pageService", pageService)

    function pageService($http)   {

        this.findPageByWebsiteId = findPageByWebsiteId;
        this.findPagesByWebsite = findPagesByWebsite;
        this.findPageByName = findPageByName;
        this.findPageById = findPageById;
        this.createPage = createPage;
        this.updatePage = updatePage;
        this.deletePage = deletePage;

        var pages = [];

        //findPageByWebsiteId(websiteId)
        function findPageByWebsiteId(userId, websiteId) {
            //http://localhost:3000/api/profile/456/website/123/page
            return $http.get("/api/profile/" + userId + "/website/" + websiteId + "/page");
            /*//alert("Inside findPageByWebsiteId of pageService.")
            pageList = [];
            for (var p in pages) {
                if (pages[p].websiteId === websiteId)   {
                    pages[p].updated = ((new Date().getMonth()+1)+ "/" + new Date().getDate()+ "");
                    pageList.push(pages[p]);
                }
                //alert("Not matched " + pages[p].developerId + " with " + userId);
            }
            return pageList;*/
        }

        function findPagesByWebsite(userId, websiteId) {
            //alert("Inside findPagesByWebsite of pageService.")
            return this.findPageByWebsiteId(userId, websiteId) ;
        }

        function findPageByName(userId, websiteId, pageName) {
            //http://localhost:3000/api/profile/456/website/456/page?pageName=Post 1
            return $http.get("/api/profile/" + userId + "/website/" + websiteId + "/page?pageName=" + pageName);
            /*for (var p in pages) {
                if (pages[p].name === pageName)    {
                    //alert(pages[p]._id + "" + pages[p].name)
                    return pages[p];
                }
            }
            alert("page with name '" + pageName + "' Not Found!");
            return null;*/
        }

        function findPageById(userId, websiteId, pageId) {
            //http://localhost:3000/api/profile/456/website/456/page/432
            return $http.get("/api/profile/" + userId + "/website/" + websiteId + "/page/" + pageId);
            /*for (var p in pages) {
                if (pages[p]._id === pageId)   {
                    pages[p].updated = ((new Date().getMonth()+1)+ "/" + new Date().getDate()+ "");
                    return angular.copy(pages[p]);
                }
                //alert("Not matched " + pages[p].developerId + " with " + userId);
            }*/
        }

        //createPage(websiteId, page)
        function createPage(userId, websiteId, page) {
            //http://localhost:3000/api/profile/456/website/123/page
            return $http.post("/api/profile/" + userId + "/website/" + websiteId + "/page", page);

            /*for (var p in pages) {
                if (pages[p].name === page.name) {
                    alert("Page with name '" + page.name + "' already exists !");
                    return null;
                }
            }
            page._id = (new Date()).getTime() + "";
            page.websiteId = websiteId;
            page.visited = "1";
            page.updated = ((new Date().getMonth()+1)+ "/" + new Date().getDate()+ "");

            pages.push(page);
            return pages;*/
        }

        //updatePage(pageId, page)
        function updatePage(userId, websiteId, pageId, page1)  {
            //http://localhost:3000/api/profile/456/website/456/page/432
            return $http.put("/api/profile/" + userId + "/website/" + websiteId + "/page/" + pageId, page1);
            /*//alert();
            for (var p in pages) {
                if (pages[p]._id === pageId)  {
                    //alert("found");
                    pages[p] = page1;
                    pages[p].updated=((new Date().getMonth()+1)+ "/" + new Date().getDate()+ "");
                    //pages[p].name = page1.name;
                    //pages[p].description = page1.description;
                    return pages[p];
                }
            }
            return null;*/
        }

        //deletePage(pageId)
        function deletePage(userId, websiteId, pageId)   {
            //http://localhost:3000/api/profile/456/website/456/page/432
            return $http.delete("/api/profile/" + userId + "/website/" + websiteId + "/page/" + pageId);
            /*for (var p in pages) {
                if (pages[p]._id === pageId) {
                    pages.splice(p, 1);
                }
            }*/
        }

    }

})();