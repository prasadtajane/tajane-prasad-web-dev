/**
 * Created by prasadtajane on 8/6/17.
 */
(function () {
    angular
        .module("WamApp")
        .factory("flickrService",flickrService);

    function flickrService($http) {
        var key = "7f525557b1a23854b756ea7055a6d4ce";
        var secret = "0d3fec51f8d53982";
        var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=" + key +"&text=";

        var api= {
            "searchPhotos": searchPhotos,
            "updatePhoto": updatePhoto
        };

        return api;

        function updatePhoto(userId,websiteId,pageId,widgetId,photoWidgetUrl){
            var url = "/api/profile/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId;
            return $http.put(url,photoWidgetUrl)
                .then(function(response){
                    return response.data;
                });
        }

        function searchPhotos(searchTerm) {
            console.log("In The Search Term");
            url = url + searchTerm;
            console.log("URL - " + url);
            return $http.get(url);
        }

    }


})();