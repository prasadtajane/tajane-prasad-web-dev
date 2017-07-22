/**
 * Created by prasadtajane on 7/21/17.
 */

(function ()    {
    angular
        .module("WamApp")
        .controller("widgetController", widgetController);

    function widgetController($location, $routeParams, $sce) {

        var model = this;

        var pageId = $routeParams.pageId;
        var userId = $routeParams["userId"];
        var websiteId = $routeParams["websiteId"];

        model.backToProfile=backToProfile;
        model.backToPageList=backToPageList;
        model.goToNewWidgetChooser=goToNewWidgetChooser;

        var widgets = [
            { "_id": "123"
                , "widgetType": "HEADING"
                , "pageId": "321"
                , "size": 2
                , "text": "GIZMODO"},
            { "_id": "234"
                , "widgetType": "HEADING"
                , "pageId": "321"
                , "size": 4
                , "text": "Lorem ipsum"},
            { "_id": "345"
                , "widgetType": "IMAGE"
                , "pageId": "321"
                , "width": "100%"
                , "url": "http://lorempixel.com/400/200/"},
            { "_id": "456"
                , "widgetType": "HTML"
                , "pageId": "321"
                , "text": "<p>Lorem ipsum</p>"},
            { "_id": "567"
                , "widgetType": "HEADING"
                , "pageId": "321"
                , "size": 4
                , "text": "Lorem ipsum"},
            { "_id": "678"
                , "widgetType": "YOUTUBE"
                , "pageId": "321"
                , "width": "100%"
                , "url": "https://youtu.be/AM2Ivdi9c4E" },
            { "_id": "789"
                , "widgetType": "HTML"
                , "pageId": "321"
                , "text": "<p>Lorem ipsum</p>"}
        ];

        function init() {
        }
        init();


        function backToProfile() {
            //alert("inside backToProfile from page-new.controller")
            $location.url("/profile/" + userId);
        }

        function backToPageList() {
            //alert("inside backToPageList from page-new.controller")
            $location.url("/profile/" + userId + "/website/" + websiteId + "/page");
        }
        
        function goToNewWidgetChooser() {
            ///user/:uid/website/:wid/page/:pid/widget/new
            $location.url("/profile/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/new");
        }
    }
})();