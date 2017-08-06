/**
 * Created by prasadtajane on 7/27/17.
 */

var app = require("../../express");
var userModel = require("../model/user/user.model.server");

var users = [];

app.get("/api/profile", getUsers);
app.get("/api/profile/:userId",findUserById);
app.post("/api/profile/", createUser);
app.put("/api/profile/:userId", updateUserByUserId);
app.delete("/api/profile/:userId", deleteUserByUserId);

function callback(err, result) {
     if(err) {
         console.log(err);
     }
     else {
         //console.log(result);
         return result;
     }
}

function getUsers(request, response) {
    var username = request.query.username;
    var password = request.query.password;
    if (username && password)   {
        findUserByUsernameAndPassword(request, response);
    }
    else if (username)  {
        findUserByUsername(request, response);
    }
    else    {
        getAllUsers(request, response);
    }
}

function findUserByUsernameAndPassword(request, response)  {
    userModel
        .findUserByCredentials(
            request.query.username
            , request.query.password
            , callback)
        .then(function (user) {
            response.json(user);
        });
}

function findUserByUsername(request, response) {
    userModel
        .findUserByUsername(request.query.username, callback)
        .then(function (user) {
            console.log(user);
            response.json(user);
        });
}

function getAllUsers(request, response) {
    userModel
        .findAll(callback)
        .then(function (user) {
            response.json(user);
        });
}

function findUserById(request, response) {
    //console.log(request.params.userId);

    userModel
        .findUserById(request.params.userId, callback)
        .then(function (user) {
            response.json(user);
        });
}


function createUser(request, response) {
    var newuser = request.body;
    newuser._id = (new Date()).getTime() + "";
    users.push(newuser);
    response.send(newuser);
    return;
}

function updateUserByUserId(request, response) {
    var userId = request.params.userId;
    var user = request.body;

    for(var u in users) {
        if( users[u]._id === userId ) {
            users[u] = user;
            response.send(users[u]);
            return;
        }
    }
    response.sendStatus(404);
    return;
}

function deleteUserByUserId(request, response) {
    var userId = request.params.userId;
    for(var u in users) {
        if (users[u]._id === userId) {
            users.splice(u,1);
            response.send("200");
            return;
        }
    }
    response.sendStatus(404);
    return;
}