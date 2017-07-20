/**
 * Created by prasadtajane on 7/20/17.
 */

(function () {
    angular
        .module("WamApp")
        .controller("registerController", registerController);

    function registerController($location, userService)   {

        var model = this;

        function init() {

        }
        init();

        model.register = (
            function (user) {
                if (user.password1 === user.password2 && typeof user.password1 !== "undefined")   {

                    if (user.username === null || user.username === '' || typeof user.username === 'undefined')   {
                        alert("Please write an username !")
                        return;
                    }
                    model.inuser = userService.findUserByUsername(user.username);
                    if(model.inuser === null)   {
                        alert("Welcome " + user.username + " !!!")
                        var newUser = {
                            username:user.username,
                            password:user.password1
                        }
                        newUser = userService.createUser(newUser);
                        alert("Hey, " + user.username + " your userId is " + newUser._id);
                        $location.url("/profile/" + newUser._id);
                    }
                    else  {
                        alert("Sorry username '" + model.inuser.username + "' already exists !");
                    }
                }
                else {
                    alert("Hi " + user.username + ", two passwords do not match!")
                }
        })
    }
})();