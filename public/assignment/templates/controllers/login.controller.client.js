/**
 * Created by prasadtajane on 7/17/17.
 */

//this is known as IIFE immediately invoke function expression.

(function ()   {
    angular
        .module("WamApp")
        .controller("loginController", loginController)

    var users = [
        {_id: "123", username: "alice", password:"alice", firstname:"aLicE", lastname:"wonderLanD"},
        {_id: "345", username: "bob", password:"bob", firstname:"bob", lastname:"marley"}
    ];

    function loginController($scope, $location) {

        $scope.login = (function (user) {

            $scope.valid = false;
            for (u in users) {
                if (user.username === users[u].username && user.password === users[u].password) {
                    $scope.valid = true;
                    $location.url("/profile/" + users[u]._id);
                }
            }
            if ($scope.valid) {
                /*$scope.message = "Welcome back " + user.username + " !!!";
                 alert($scope.message);*/
            }
            else {
                $scope.message = "Incorrect credentials for user '" + user.username + "' !!!";
                alert($scope.message);
            }

        })

        $scope.register = (function () {
            $location.url("/register");
        })
    }
})();