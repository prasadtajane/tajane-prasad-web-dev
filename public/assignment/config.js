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
            .when("/profile/:userId/websites", {
                templateUrl:"website/view/website-list.view.client.html",
                controller: "weblistController",
                controllerAs: "model"
            })
    }


})();