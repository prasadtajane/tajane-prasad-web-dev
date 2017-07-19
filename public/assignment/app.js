/**
 * Created by prasadtajane on 7/17/17.
 */

var app = angular.module("WamApp", ["ngRoute"]);

app.controller("loginController", loginController);
app.controller("profileController", profileController);

app.config(configuration);

function configuration($routeProvider)   {
    $routeProvider
        .when("/login", {
            templateUrl: "user/login.html"})
        .when("/profile/:userId", {
            templateUrl: "user/profile.html"})
        .when("/register", {
            templateUrl: "user/register.html"})
}

var users = [
    {_id: "123", username: "alice", password:"alice", firstname:"aLicE", lastname:"wonderLanD"},
    {_id: "345", username: "bob", password:"bob", firstname:"bob", lastname:"marley"}
];

function profileController($scope, $routeParams) {
    var uId = $routeParams.userId;
    for (u in users)    {
        if (users[u]._id === uId)   {
            $scope.user = users[u];

            $scope.message = "Welcome back '" + users[u].username + "' !!!";
            alert($scope.message);
        }
    }
}

function loginController($scope, $location) {

    $scope.login = (function (user) {

        $scope.valid=false;
        for(u in users) {
            if (user.username===users[u].username && user.password===users[u].password)  {
                $scope.valid=true;
                $location.url("/profile/" + users[u]._id);
            }
        }
        if($scope.valid)  {
            /*$scope.message = "Welcome back " + user.username + " !!!";
            alert($scope.message);*/
        }
        else    {
            $scope.message = "Incorrect credentials for user '" + user.username + "' !!!";
            alert($scope.message);
        }

    })

    $scope.register = (function () {
        $location.url("/register");
    })
}