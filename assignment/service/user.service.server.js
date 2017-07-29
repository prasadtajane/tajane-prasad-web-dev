/**
 * Created by prasadtajane on 7/27/17.
 */

var app = require("../../express");

var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder" ,    email: "a@b.com",  contact: 123,  isAdmin: true  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley",     email: "a@b.com",  contact: 123  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia",     email: "a@b.com",  contact: 123  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi",    email: "a@b.com",  contact: 123  }
];

app.get("/api/profile", getUsers);
app.get("/api/profile/:userId",findUserById);
app.post("/api/profile/", createUser);
app.put("/api/profile/:userId", updateUserByUserId);
app.delete("/api/profile/:userId", deleteUserByUserId);


function getUsers(request, response) {
    var username = request.query.username;
    var password = request.query.password;
    if (username && password)   {
        response.send(findUserByUsernameAndPassword(username, password));
    }
    else if (username)  {
        response.send(findUserByUsername(username));
    }
    else    {
        getAllUsers(request, response);
    }
}

function findUserByUsernameAndPassword(username, password)  {
    for (u in users)    {
        var _user = users[u];
        if(_user.username === username && _user.password === password) {
            //res.send(_user);
            return _user;
        }
    }
    return ("0");
}

function findUserByUsername(username) {
    for (u in users)    {
        if (users[u].username === username) {
            return users[u];
        }
    }
    return ("0");
}

function getAllUsers(request, response) {
    response.send(users);
}

function findUserById(request, response) {
    var userId = request.params.userId;
    for (u in users)    {
        if (users[u]._id === userId) {
            response.send(users[u]);
            return;
        }
    }
    response.send("0");
    return;
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