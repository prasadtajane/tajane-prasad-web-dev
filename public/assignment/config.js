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
                templateUrl: "templates/user/login.view.client.html"})
            .when("/profile/:userId", {
                templateUrl: "templates/user/profile.view.client.html"})
            .when("/register", {
                templateUrl: "templates/user/register.view.client.html"})
    }


})();