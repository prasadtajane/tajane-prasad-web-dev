/**
 * Created by prasadtajane on 7/17/17.
 */

//this is known as IIFE immediately invoke function expression.

(function ()   {
    angular
        .module("WamApp")
        .controller("loginController", loginController)

    function loginController($location, userService) {

        var model = this;
        model.login = login;

        function login(user) {

            var inuser = userService.findUserByUsernameAndPassword(user.username, user.password);

            if (inuser == null) {
                model.message = "Incorrect credentials for user '" + user.username + "' !!!";
                alert(model.message);
            }
            else {
                model.message = "Welcome back " + inuser.username + " !!!";
                //alert("user is " + inuser.username +" "+inuser.password+inuser._id);
                $location.url("/profile/" + inuser._id);
            }

        }

        model.register = (function () {
            $location.url("/register");
        })
    }
})();