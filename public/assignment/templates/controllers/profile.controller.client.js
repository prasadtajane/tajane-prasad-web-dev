/**
 * Created by prasadtajane on 7/17/17.
 */

//this is known as IIFE immediately invoke function expression.

(function ()   {
    angular
        .module("WamApp")
        .controller("profileController", profileController)

    function profileController($routeParams, $location, userService) {

        var model = this;
        var searchProfile = searchProfile;
        //var updateUser = updateUser;
        model.updateUser = updateUser;
        model.deleteUser = deleteUser;

        var uId = $routeParams["userId"];

        function init() {
            model.user = userService.findUserById(uId);
        }
        init();

        function searchProfile() {
            if (model.user === null)   {
                model.message = "Incorrect id  '" + uId + "' !!!";
                alert(model.message);
            }
            else    {
                //alert(model.user);
                return model.user.username;
            }
        }
        searchProfile();

        function updateUser(user) {
            userService.updateUserByUserId(user, uId);

        }

        function deleteUser(user) {
            userService.deleteUserByUserId(uId);
            alert("Thank you for your patience, user with username '" + user.username + "' has been removed!");
            $location.url("/login");
        }
    }

})();