/**
 * Created by prasadtajane on 7/21/17.
 */

(function () {
    angular
        .module("WamApp")
        .service("pageService", pageService)

    function pageService()   {

        this.findPageByWebsiteId = findPageByWebsiteId;
        this.findPagesByWebsite = findPagesByWebsite;
        this.findPageByName = findPageByName;
        this.findPageById = findPageById;
        this.createPage = createPage;
        this.updatePage = updatePage;
        this.deletePage = deletePage;

        var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem", "visited": "15" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem", "visited": "35" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem", "visited": "45" }
            ];

        //findPageByWebsiteId(websiteId)
        function findPageByWebsiteId(websiteId) {
            //alert("Inside findPageByWebsiteId of pageService.")
            pageList = [];
            for (var p in pages) {
                if (pages[p].websiteId === websiteId)   {
                    pages[p].updated = ((new Date().getMonth()+1)+ "/" + new Date().getDate()+ "");
                    pageList.push(pages[p]);
                }
                //alert("Not matched " + pages[p].developerId + " with " + userId);
            }
            return pageList;
        }

        function findPagesByWebsite(websiteId) {
            //alert("Inside findPagesByWebsite of pageService.")
            return this.findPageByWebsiteId(websiteId) ;
        }

        function findPageByName(pageName) {
            for (var p in pages) {
                if (pages[p].name === pageName)    {
                    //alert(pages[p]._id + "" + pages[p].name)
                    return pages[p];
                }
            }
            alert("page with name '" + pageName + "' Not Found!");
            return null;
        }

        function findPageById(pageId) {
            for (var p in pages) {
                if (pages[p]._id === pageId)   {
                    pages[p].updated = ((new Date().getMonth()+1)+ "/" + new Date().getDate()+ "");
                    return pages[p];
                }
                //alert("Not matched " + pages[p].developerId + " with " + userId);
            }
        }

        //createPage(websiteId, page)
        function createPage(websiteId, page) {
            page._id = (new Date()).getTime() + "";
            page.websiteId = websiteId;
            page.visited = "1";
            page.updated = ((new Date().getMonth()+1)+ "/" + new Date().getDate()+ "");

            pages.push(page);
            return pages;
        }

        //updatePage(pageId, page)
        function updatePage(pageId, page1)  {
            for (var p in pages) {
                if (pages[p] === pageId)  {
                    pages[p].updated=((new Date().getMonth()+1)+ "/" + new Date().getDate()+ "");
                    pages[p].name = page1.name;
                    pages[p].description = page1.description;

                    return pages[p];
                }
                return null;
            }
        }

        //deletePage(pageId)
        function deletePage(pageId)   {
            for (var p in pages) {
                if (pages[p]._id === pageId) {
                    pages.splice(w, 1);
                }
            }
        }

    }

})();