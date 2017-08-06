/**
 * Created by prasadtajane on 8/4/17.
 */

var db = require("../models.server");
var mongoose = require('mongoose');
var userSchema = require("./user.schema.server");

var userModel = mongoose.model("UserModel", userSchema);

userModel.findAll = findAll;
userModel.createUser = createUser;
userModel.updateUser = updateUser;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;

module.exports = userModel;

User = userModel;




function createUser(user) {
    User.create({
        username:arrayName[a].username,
        password:arrayName[a].password,
        firstName:arrayName[a].firstName,
        lastName:arrayName[a].lastName,
        email:arrayName[a].email,
        contact:arrayName[a].contact,
        isAdmin:arrayName[a].isAdmin,
        dateCreated:arrayName[a].dateCreated
    }, callback);
}

function findUserById(userId, callback) {
    //console.log("inside findByUserId of model! = "+userId);
    return userModel
        .findById(
            userId,
            function (err, result) {
                if(err) {
                    callback(err, null);
                }
                else {
                    callback(null, result);
            }
    });
}

function findAll(callback) {
    return User
        .find(
            function (err, result) {
                if(err) {
                    callback(err, null);
                }
                else {
                    callback(null, result);
                }
            }
        );
}

function findUserByUsername(name, callback)   {
    User
        .find(
            {username: name},
            function (err, result) {
                if(err) {
                    callback(err, null);
                }
                else {
                    console.log(result[0]);
                    callback(null, result[0]);
                }
            })
}

function findUserByCredentials(username, password, callback) {
    User
        .findOne(
            {username: username, password: password},
            function (err, result) {
                if(err) {
                    callback(err, null);
                }
                else {
                    console.log(result);
                    callback(null, result);
                }
        });
}

function updateUser(userId, user)   {
    User.update({_id:userId}, user, callback);
}

function deleteUser(userId) {
    User.remove({_id:userId}, callback);
}

//findAll();
//findUserById("59857d3d4d8f54554ad60a17", callback);
//       findUserById("59857d3d4d8f54554ad60a19", callback);
//findUserByUsername("alice");
//findUserByCreadentials("alice", "alice");
//var user = { firstName:"alicia", lastName:"wonderWomania" }
//updateUser("598515103cf9234d20944366", user);
//deleteUser("598515103cf9234d20944366")
/*
function tryM() {
    var a = findUserById("59852da4cd24bf4f03ed2690");
    updateUser("59852da4cd24bf4f03ed2691",a)
    findAll();
}

tryM();*/

//
/*findUserByUsername("alice", function (err, result) {
    if(err) {
        console.log(err);
    }
    else {
        console.log(result);
        return result;
    }
});*/
//
// findUserById("59857d3d4d8f54554ad60a19", function (err, result) {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log(result);
//         return result;
//     }
// });