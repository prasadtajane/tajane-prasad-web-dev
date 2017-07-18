/**
 * Created by prasadtajane on 7/17/17.
 */

var app = angular.module("WamApp", []);

app.controller("loginController", loginController);

function loginController($scope) {

    var users = [
        {_id: "123", username: "alice", password:"alice", firstname:"alice", lastname:"wonderland"},
        {_id: "345", username: "bob", password:"bob", firstname:"bob", lastname:"marley"}
    ]

    $scope.login = (function (user) {

        for(u in users) {
            if (user.username===users[u].username && user.password===users[u].password)  {
                $scope.message = user.username;
            }
        }
        //alert("Welcome " +  user.username + " !!!");
    })
}