/**
 * Created by prasadtajane on 8/4/17.
 */

var db = require("../models.server");
var mongoose = require('mongoose');
var userSchema = require("./user.schema.server");

var userModel = mongoose.model("UserModel", userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.updateUser = updateUser;
userModel.findUserByCredentials = findUserByCredentials;

module.exports = userModel;

User = userModel;




function callback(err, result)   {
    console.log(result);
}


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

function findUserById(userId){
    User.findOne({_id:userId},callback);
}

function findAll() {
    User.find(callback);
}

function findUserByUsername(username)   {
    User.findOne({username: username}, callback)
}

function findUserByCredentials(username, password) {
    User.findOne({username: username, password: password}, callback);
}

function updateUser(userId, user)   {
    User.update({_id:userId}, user, callback);
}

function deleteUser(userId) {
    User.remove({_id:userId}, callback);
}

//findAll();
//findUserById("59856b789ae0d253e2260271");
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


