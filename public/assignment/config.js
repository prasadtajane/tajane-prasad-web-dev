/**
 * Created by prasadtajane on 7/17/17.
 */

//this is known as IIFE immediately invoke function expression.

(function ()   {
    angular
        .module("WamApp")
        .config(configuration);

    function configuration($routeProvider)   {
        $routeProvider
            .when("/login", {
                templateUrl: "./user/view/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"
            })
            .when("/profile/:userId", {
                templateUrl: "./user/view/profile.view.client.html",
                controller: "profileController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "./user/view/register.view.client.html",
                controller: "registerController",
                controllerAs: "model"
            })


            .when("/profile/:userId/website", {
                templateUrl:"website/view/website-list.view.client.html",
                controller: "weblistController",
                controllerAs: "model"
            })
            .when("/profile/:userId/website/new", {
                templateUrl:"website/view/website-new.view.client.html",
                controller: "newWebsiteController",
                controllerAs: "model"
            })
            .when("/profile/:userId/website/:websiteId", {
                templateUrl:"website/view/website-edit.view.client.html",
                controller: "editWebsiteController",
                controllerAs: "model"
            })




            .when("/user/:userId/website/:websiteId/page", {
                templateUrl:"page/view/page-list.view.client.html",
                controller: "pageController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId/page/new", {
                templateUrl:"page/view/page-new.view.client.html",
                controller: "newPageController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId/page/pageId", {
                templateUrl:"page/view/page-edit.view.client.html",
                controller: "editPageController",
                controllerAs: "model"
            })

            .when("/user/:userId/website/:websiteId/page/pageId/widget", {
                templateUrl:"widget/view/widget-list.view.client.html",
                controller: "widgetController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId/page/pageId/widget/new", {
                templateUrl:"widget/view/widget-new.view.client.html",
                controller: "newWidgetController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId/page/pageId/widget/:widgetId", {
                templateUrl:"widget/view/widget-edit.view.client.html",
                controller: "editWidgetController",
                controllerAs: "model"
            })
    }


})();