/**
 * Created by prasadtajane on 7/17/17.
 */

//this is known as IIFE immediately invoke function expression.

(function ()   {
    angular
        .module("WamApp")
        .controller("profileController", profileController)

    function profileController($routeParams, $location, userService, $rootScope) {

        var model = this;
        //model.searchProfile = searchProfile;
        var updateUser = updateUser;
        model.updateUser = updateUser;
        model.deleteUser = deleteUser;
        model.logout = logout;

        model.findWebsites = findWebsites;

        var uId = $routeParams["userId"];
        
        function logout() {
            $rootScope.currentUser = null;
            $location.url("/login");
        }

        function init() {
            //alert("inside profile service!")
            model.user = userService.findUserById(uId);
            var user = model.user;
            return user;
        }
        init();

        /*function searchProfile() {
            if (model.user === null)   {
                model.message = "Incorrect id  '" + uId + "' !!!";
                alert(model.message);
            }
            else    {
                //alert(model.user);
                return model.user.username;
            }
        }
        searchProfile();*/

        function updateUser(user) {
            //alert("inside update of controller");
            userService.updateUserByUserId(user, uId);
            alert("Hi " + user.username + " all values have been updated successfully!");

        }

        function deleteUser(user) {
            userService.deleteUserByUserId(uId);
            alert("Thank you for your patience, user with username '" + user.username + "' has been removed!");
            $location.url("/login");
        }

        function findWebsites() {
            $location.url("/profile/" + uId + "/website");
        }
    }

})();